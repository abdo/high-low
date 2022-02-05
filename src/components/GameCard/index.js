import { CardImage } from './style';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const GameCard = ({ isPiled, image }) => {
  return (
    <CardImage
      as={motion.img}
      src={image}
      alt='game-card'
      isPiled={isPiled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    />
  );
};

GameCard.propTypes = {
  image: PropTypes.string.isRequired,
};

GameCard.defaultProps = {
  isPiled: false,
};

export default GameCard;
