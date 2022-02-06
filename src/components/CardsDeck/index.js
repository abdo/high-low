import GameCard, { cardBackLink } from 'components/GameCard';
import { drawCard, drawCardEnd } from 'store/game/actions';
import { motion, useAnimation } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import Box from 'components/lib/Box';
import { pileDrawnCard } from 'store/game/actions';
import { useEffect } from 'react';

const cardDrawSoundEffect =
  'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-41945/zapsplat_foley_paper_sheets_x3_construction_sugar_set_down_on_surface_001_42007.mp3';

const CardsDeck = () => {
  const dispatch = useDispatch();

  const controlAnimation = useAnimation();

  const { lastDrawnCard, drawCardStart } = useSelector((state) => ({
    lastDrawnCard: state.game.lastDrawnCard,
    drawCardStart: state.game.drawCardStart,
  }));

  useEffect(() => {
    dispatch(drawCard({ callback: animate }));
  }, []); // eslint-disable-line

  useEffect(() => {
    if (drawCardStart) {
      animate();
      dispatch(drawCardEnd());
    }
  }, [drawCardStart]); // eslint-disable-line

  const animate = () => {
    var audio = new Audio(cardDrawSoundEffect);
    audio.play();
    const animationDuration = 1200;

    controlAnimation
      .start({
        x: [0, 200, 0],
        y: 'calc(50vh - 50% )',
        transition: { duration: animationDuration * 0.001, ease: 'easeInOut' },
      })
      .then(() => {
        dispatch(pileDrawnCard());
        dispatch(drawCard({}));

        controlAnimation.start({
          rotateY: 0,
          x: 0,
          y: 0,
          transition: { duration: 0 },
        });
      });
  };

  return (
    <Box position='relative' w='15rem'>
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
