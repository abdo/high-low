import { cardValuesMapper, possibleGuesses } from 'store/game/mapper';
import {
  drawCardStart,
  setCurrentPlayer,
  setNoOfSuccessfulConsecutiveGuesses,
  updateCurrentPlayer,
} from 'store/game/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Box from 'components/lib/Box';
import PlayerArea from 'components/PlayerArea';
import Text from 'components/lib/Text';
import { adjustPlayerInfo } from 'store/players/actions';
import { showModal } from 'store/general/actions';

const PlayersArea = () => {
  const [showQuestion, setShowQuestion] = useState();

  const {
    playersInfo,
    currentPlayerId,
    pileCards,
    latestGuess,
    noOfSuccessfulConsecutiveGuesses,
  } = useSelector((state) => ({
    playersInfo: state.players.playersInfo,
    currentPlayerId: state.game.currentPlayerId,
    pileCards: state.game.pileCards,
    latestGuess: state.game.latestGuess,
    noOfSuccessfulConsecutiveGuesses:
      state.game.noOfSuccessfulConsecutiveGuesses,
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

  // Show result notification
  useEffect(() => {
    if (lastPiledCard && secondToLastPiledCard && latestGuess) {
      let isGuessSuccessful = false;
      if (
        latestGuess === possibleGuesses.high &&
        cardValuesMapper[lastPiledCard.value] >
          cardValuesMapper[secondToLastPiledCard.value]
      ) {
        isGuessSuccessful = true;
      }

      if (
        latestGuess === possibleGuesses.low &&
        cardValuesMapper[lastPiledCard.value] <
          cardValuesMapper[secondToLastPiledCard.value]
      ) {
        isGuessSuccessful = true;
      }

      // show notification
      showModal({
        content: (
          <Box textAlign='center'>
            <Text type='h3' fw='bold'>
              {lastPiledCard.value}
              {cardValuesMapper[lastPiledCard.value] <
              cardValuesMapper[secondToLastPiledCard.value]
                ? ' < '
                : cardValuesMapper[lastPiledCard.value] <
                  cardValuesMapper[secondToLastPiledCard.value]
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
  }, [lastPiledCard]); // eslint-disable-line

  const onAnswerQuestion = ({ answer }) => {
    setShowQuestion(false);
    dispatch(drawCardStart({ answer }));
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
