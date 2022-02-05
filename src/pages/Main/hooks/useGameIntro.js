import { hideModal, showModal } from 'store/general/actions';
import { useEffect, useState } from 'react';

import Box from 'components/lib/Box';
import Button from 'components/lib/Button';
import Span from 'components/lib/Span';
import Text from 'components/lib/Text';
import mainSoundEffect from 'assets/music/main-sound-effect.mp3';
import theme from 'style/theme';
import { useDispatch } from 'react-redux';

const useGameIntro = () => {
  const [hasGameStarted, setHasGameStarted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const onLetsStart = () => {
      setHasGameStarted(true);
      dispatch(hideModal());
      const audio = new Audio(mainSoundEffect);
      audio.volume = '0.2';
      audio.loop = true;
      audio.play();
    };

    const introModalContent = (
      <Box w='45rem' wt='30rem'>
        <Text type='h3'>Welcome to High-Low! ⬆️ ⬇️ </Text>
        <Text type='h4'>The coolest cards game ever. 🥳</Text>
        <Text>
          <Span fw='bold'>Here are the rules:</Span> <br />
          It starts with a deck of cards, the first card is drawn from that deck
          and added to a pile. <br />
          You then have to guess whether the next card's number will be a higher
          number or lower number than the latest card. If you are correct, we
          add that card to the pile. If you are incorrect, you get a point for
          every card that was in the pile at that time (for example, if 10 cards
          were in the pile, you would get 10 points).And the pile is cleared.{' '}
          <br />
          After users have 3 successful guesses in a row, they can "pass" to the
          other player. By pass we mean that if you start as Player 1, you can
          change to Player 2. <br /> Player 2 can pass back to Player 1 once
          they get 3 successful guesses in a row. The player with the least
          number of points at the end wins.
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

    dispatch(
      showModal({
        content: introModalContent,
        isNotClosable: true,
      }),
    );
  }, [dispatch]);

  return {
    hasGameStarted,
  };
};

export default useGameIntro;
