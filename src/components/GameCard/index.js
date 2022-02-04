import { CardImage } from './style';
import { motion } from 'framer-motion';

const GameCard = ({ isPiled }) => {
  return (
    <CardImage
      as={motion.img}
      src='https://deckofcardsapi.com/static/img/4D.png'
      alt='game-card'
      width='150px'
      isPiled={isPiled}
      whileHover={{ opacity: 0.8 }}
    />
  );
};

GameCard.defaultProps = {
  isPiled: false,
};

export default GameCard;
