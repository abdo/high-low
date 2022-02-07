import { hideModal, showModal } from 'store/general/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Box from 'components/lib/Box';
import Button from 'components/lib/Button';
import Input from 'components/lib/Input';
import Span from 'components/lib/Span';
import Text from 'components/lib/Text';
import { adjustPlayerInfo } from 'store/players/actions';
import mainSoundEffect from 'assets/music/main-sound-effect.mp3';
import theme from 'style/theme';
import { useCallback } from 'react';

const useGameIntro = () => {
  const [hasGameStarted, setHasGameStarted] = useState(false);

  const dispatch = useDispatch();

  const showPlayerInfoModal = useCallback(() => {
    const onLetsStart = () => {
      setHasGameStarted(true);
      hideModal();
      const audio = new Audio(mainSoundEffect);
      audio.volume = '0.2';
      audio.loop = true;
      audio.play();
    };

    const onChangePlayerName = ({ id, name }) => {
      dispatch(adjustPlayerInfo({ id, info: { name } }));
    };

    const PlayerInfoModalContent = () => {
      const { playersInfo } = useSelector((state) => ({
        playersInfo: state.players.playersInfo,
      }));

      const startGameEnabled = playersInfo?.every((p) => p.name);

      const onKeyPress = (e) => {
        e.stopPropagation();
        if (e.key === 'Enter') {
          if (startGameEnabled) onLetsStart();
        }
      };

      return (
        <Box w='45rem' wt='30rem' textAlign='center'>
          <Text type='h4'>Who is playing? ⬆️ ⬇️ </Text>

          <Box m='4rem 0 3rem'>
            <Input
              label='Player 1 name'
              placeholder='E.g: Adam'
              onChange={(e) =>
                onChangePlayerName({
                  id: playersInfo[0].id,
                  name: e.target.value?.trim(),
                })
              }
              onKeyPress={onKeyPress}
            />
            <Input
              label='Player 2 name'
              placeholder="E.g: Adam's friend"
              onChange={(e) =>
                onChangePlayerName({
                  id: playersInfo[1].id,
                  name: e.target.value?.trim(),
                })
              }
              onKeyPress={onKeyPress}
            />
          </Box>

          <Button
            bgc={theme.colors.mainLight}
            onClick={onLetsStart}
            containerProps={{ m: '2rem auto', textAlign: 'center' }}
            disabled={!startGameEnabled}
          >
            Start Game
          </Button>
        </Box>
      );
    };

    showModal({
      content: <PlayerInfoModalContent />,
      isNotClosable: true,
      noModalEase: true,
    });
  }, [dispatch]);

  useEffect(() => {
    const onLetsStart = () => {
      hideModal();
      showPlayerInfoModal();
    };

    const introModalContent = (
      <Box w='45rem' wt='30rem'>
        <Text type='h3'>Welcome to High-Low! ⬆️ ⬇️ </Text>
        <Text type='h4'>The coolest cards game ever. 🥳</Text>
        <Text type='h5'>
          <Span fw='bold'>
            - You try to guess whether the next drawn card will have a higher
            value or a lower value that the current card!
          </Span>{' '}
          <br /> <br />
          - If you are correct, we add that card to the pile. If you are
          incorrect, you get a point for every card that was in the pile at that
          time (for example, if 10 cards were in the pile, you would get 10
          points).And the pile is cleared. <br /> <br />- After you get 3
          successful guesses in a row, you "pass" to the other player. <br />
          <br />
          <Span fw='bold'>
            - The player with the least number of points at the of the game
            wins!
          </Span>
        </Text>
        <Button
          bgc={theme.colors.mainLight}
          onClick={onLetsStart}
          containerProps={{ m: '2rem auto', textAlign: 'center' }}
        >
          Let's go!
        </Button>
      </Box>
    );

    showModal({
      content: introModalContent,
      isNotClosable: true,
      noModalEase: true,
    });
  }, []); // eslint-disable-line

  return {
    hasGameStarted,
  };
};

export default useGameIntro;
