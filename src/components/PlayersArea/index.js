import { cardValuesMapper, possibleGuesses } from 'store/game/mapper';
import {
  drawCardStart,
  playAgain,
  setCurrentPlayer,
  setNoOfSuccessfulConsecutiveGuesses,
  updateCurrentPlayer,
} from 'store/game/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Box from 'components/lib/Box';
import Button from 'components/lib/Button';
import PlayerArea from 'components/PlayerArea';
import Text from 'components/lib/Text';
import { adjustPlayerInfo } from 'store/players/actions';
import { deckSize } from 'store/game/reducer';
import { showModal } from 'store/general/actions';
import theme from 'style/theme';

const PlayersArea = () => {
  const [showQuestion, setShowQuestion] = useState();

  const {
    playersInfo,
    currentPlayerId,
    pileCards,
    latestGuess,
    noOfSuccessfulConsecutiveGuesses,
    isDrawingCard,
  } = useSelector((state) => ({
    playersInfo: state.players.playersInfo,
    currentPlayerId: state.game.currentPlayerId,
    pileCards: state.game.pileCards,
    latestGuess: state.game.latestGuess,
    noOfSuccessfulConsecutiveGuesses:
      state.game.noOfSuccessfulConsecutiveGuesses,
    isDrawingCard: state.game.isDrawingCard,
  }));

  const lastPiledCard = pileCards.at(-1);
  const secondToLastPiledCard = pileCards.at(-2);

  const currentPlayerInfo = playersInfo.find(
    (info) => info.id === currentPlayerId,
  );

  const dispatch = useDispatch();

  // Show current player notification
  useEffect(() => {
    if (!currentPlayerId) {
      dispatch(setCurrentPlayer({ playerId: playersInfo[0].id }));
    } else {
      showModal({
        content: (
          <>
            <Text type='h3' fw='bold'>
              It is your turn, {currentPlayerInfo?.name}
            </Text>
          </>
        ),
        isNotClosable: true,
        isTemporaryModal: true,
      });

      setShowQuestion(true);
    }
  }, [currentPlayerId]); // eslint-disable-line

  const onPlayAgain = () => {
    dispatch(playAgain());
  };

  console.log('pileCards.length :>> ', pileCards.length);
  // Show game end notification
  useEffect(() => {
    if (pileCards.length >= deckSize) {
      let winner = playersInfo.sort((a, b) => a.totalPoints - b.totalPoints)[0];
      if (playersInfo.every((p) => p.totalPoints === winner.totalPoints)) {
        winner = null;
      }

      showModal({
        content: (
          <Box textAlign='center'>
            {winner ? (
              <Text type='h2' fw='bold'>
                Congratulations {winner?.name}! <br /> You're the KING 😉
              </Text>
            ) : (
              <Text type='h2' fw='bold'>
                It's a draw 🤷 <br /> You guys rock
              </Text>
            )}

            <Text type='h2' fw='bold'>
              Let's play again!
            </Text>
            <Button
              onClick={onPlayAgain}
              bgc={theme.colors.mainLight}
              containerProps={{ m: '2rem 0 0' }}
            >
              Play again
            </Button>
          </Box>
        ),
        isNotClosable: true,
      });
    }
  }, [pileCards]); // eslint-disable-line

  // Show result notification
  useEffect(() => {
    if (lastPiledCard && secondToLastPiledCard && latestGuess) {
      let isGuessSuccessful = false;

      const lastPiledCardValue = cardValuesMapper[lastPiledCard.value];
      const secondToLastPiledCardValue =
        cardValuesMapper[secondToLastPiledCard.value];

      if (
        latestGuess === possibleGuesses.high &&
        lastPiledCardValue > secondToLastPiledCardValue
      ) {
        isGuessSuccessful = true;
      }

      if (
        latestGuess === possibleGuesses.low &&
        lastPiledCardValue < secondToLastPiledCardValue
      ) {
        isGuessSuccessful = true;
      }

      // show notification
      showModal({
        content: (
          <Box textAlign='center'>
            <Text type='h3' fw='bold'>
              {lastPiledCard.value}
              {lastPiledCardValue < secondToLastPiledCardValue
                ? ' < '
                : lastPiledCardValue > secondToLastPiledCardValue
                ? ' > '
                : ' = '}
              {secondToLastPiledCard.value}
            </Text>
            {isGuessSuccessful ? (
              <Text type='h3' fw='bold'>
                Good job! ✅
              </Text>
            ) : (
              <Text type='h3' fw='bold'>
                Hard luck! ❌
              </Text>
            )}
          </Box>
        ),
        isNotClosable: true,
        isTemporaryModal: true,
      });

      // add points
      dispatch(
        adjustPlayerInfo({
          id: currentPlayerId,
          info: {
            totalPoints: isGuessSuccessful
              ? currentPlayerInfo.totalPoints
              : currentPlayerInfo.totalPoints + 1,
            noOfSuccessfulGuesses: isGuessSuccessful
              ? currentPlayerInfo.noOfSuccessfulGuesses + 1
              : currentPlayerInfo.noOfSuccessfulGuesses,
          },
        }),
      );

      // update current player
      if (isGuessSuccessful) {
        const newNumberOfGuesses =
          noOfSuccessfulConsecutiveGuesses + 1 === 3
            ? 0
            : noOfSuccessfulConsecutiveGuesses + 1;
        dispatch(
          setNoOfSuccessfulConsecutiveGuesses({ no: newNumberOfGuesses }),
        );
        if (noOfSuccessfulConsecutiveGuesses + 1 === 3) {
          setTimeout(() => {
            dispatch(
              updateCurrentPlayer({
                playerId:
                  playersInfo[
                    (playersInfo.findIndex((p) => p.id === currentPlayerId) +
                      1) %
                      playersInfo.length
                  ].id,
              }),
            );
          }, 1800);
        }
      } else {
        dispatch(setNoOfSuccessfulConsecutiveGuesses({ no: 0 }));
      }

      // update show question
      setShowQuestion(true);
    }
  }, [pileCards]); // eslint-disable-line

  const onAnswerQuestion = ({ answer }) => {
    if (!isDrawingCard) dispatch(drawCardStart({ answer }));
  };

  return (
    <>
      {playersInfo.map((info) => (
        <PlayerArea
          key={info.id}
          playerInfo={info}
          lastPiledCard={lastPiledCard}
          showQuestion={showQuestion && info.id === currentPlayerId}
          onAnswerQuestion={onAnswerQuestion}
          noOfSuccessfulConsecutiveGuesses={noOfSuccessfulConsecutiveGuesses}
          isInDanger={playersInfo.every(
            (p) => p.id === info.id || p.totalPoints < info.totalPoints,
          )}
        />
      ))}
    </>
  );
};

export default PlayersArea;
