import { CardImage } from './style';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const cardBackLink = 'https://deckofcardsapi.com/static/img/back.png';

const GameCard = ({ isPiled, image }) => {
  return (
    <CardImage
      as={motion.img}
      src={image}
      alt='game-card'
      $isPiled={isPiled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    />
  );
};

GameCard.propTypes = {
  isPiled: PropTypes.bool,
  image: PropTypes.string,
};

GameCard.defaultProps = {
  isPiled: false,
  image: cardBackLink,
};

export default GameCard;
