import { motion, useAnimation } from 'framer-motion';

import Box from 'components/lib/Box';
import GameCard from 'components/GameCard';
import { useState } from 'react';

const cardBackLink = 'https://deckofcardsapi.com/static/img/back.png';

const CardsDeck = () => {
  let [revealed, setRevealed] = useState(false);

  const controlAnimation = useAnimation();

  const animate = () => {
    const animationDuration = 700;

    setRevealed(false);

    controlAnimation
      .start({
        rotateY: 180,
        x: '0',
        y: 'calc(50vh - 50% )',
        transition: { duration: animationDuration * 0.001, ease: 'easeInOut' },
      })
      .then(() => {
        controlAnimation.start({
          rotateY: 0,
          x: '0',
          y: '0',
          transition: { duration: 0 },
        });
      });

    setTimeout(() => {
      setRevealed(true);
    }, animationDuration / 2);
  };

  return (
    <Box position='relative' onClick={animate}>
      <Box as={motion.div} animate={controlAnimation}>
        <GameCard
          image={
            revealed
              ? 'https://deckofcardsapi.com/static/img/4D.png'
              : cardBackLink
          }
          isPiled
        />
      </Box>

      <Box position='absolute' top='0' left='0'>
        <GameCard image={cardBackLink} isPiled />
      </Box>
    </Box>
  );
};

export default CardsDeck;
