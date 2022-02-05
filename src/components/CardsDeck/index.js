import { motion, useAnimation } from 'framer-motion';

import Box from 'components/lib/Box';
import GameCard from 'components/GameCard';
import { useState } from 'react';

const cardBackLink = 'https://deckofcardsapi.com/static/img/back.png';

const CardsDeck = () => {
  let [isCardRevealed, setIsCardRevealed] = useState(false);

  const controlAnimation = useAnimation();

  const animate = () => {
    const animationDuration = 700;

    setIsCardRevealed(false);

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
      setIsCardRevealed(true);
    }, animationDuration / 2);
  };

  return (
    <Box position='relative' onClick={animate}>
      <Box as={motion.div} animate={controlAnimation} zIndex={3}>
        <GameCard
          image={
            isCardRevealed
              ? 'https://deckofcardsapi.com/static/img/4D.png'
              : cardBackLink
          }
        />
      </Box>

      <Box position='absolute' top='0' left='0' zIndex={1}>
        <GameCard image={cardBackLink} isPiled />
      </Box>
    </Box>
  );
};

export default CardsDeck;
