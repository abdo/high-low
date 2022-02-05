import GameCard, { cardBackLink } from 'components/GameCard';
import { motion, useAnimation } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import Box from 'components/lib/Box';
import { drawCard } from 'store/game/actions';
import { pileDrawnCard } from 'store/game/actions';
import { useEffect } from 'react';

const CardsDeck = () => {
  const dispatch = useDispatch();

  const controlAnimation = useAnimation();

  const { lastDrawnCard } = useSelector((state) => ({
    lastDrawnCard: state.game.lastDrawnCard,
  }));

  useEffect(() => {
    dispatch(drawCard());
  }, []); // eslint-disable-line

  const animate = () => {
    const animationDuration = 2000;

    controlAnimation
      .start({
        x: [0, 200, 0],
        y: 'calc(50vh - 50% )',
        transition: { duration: animationDuration * 0.001, ease: 'easeInOut' },
      })
      .then(() => {
        dispatch(pileDrawnCard());
        dispatch(drawCard());

        controlAnimation.start({
          rotateY: 0,
          x: 0,
          y: 0,
          transition: { duration: 0 },
        });
      });
  };

  return (
    <Box position='relative' onClick={animate}>
      <Box
        as={motion.div}
        animate={controlAnimation}
        hidden={!lastDrawnCard.image}
      >
        <Box>
          <GameCard image={lastDrawnCard?.image} />
        </Box>
      </Box>

      <Box position='absolute' top='0' left='0'>
        <GameCard image={cardBackLink} isPiled />
      </Box>
    </Box>
  );
};

export default CardsDeck;
