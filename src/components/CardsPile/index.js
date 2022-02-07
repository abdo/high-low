import Box from 'components/lib/Box';
import GameCard from 'components/GameCard';
import { useSelector } from 'react-redux';

const CardsPile = () => {
  const { pileCards, noOfCurrentlyPiledCards } = useSelector((state) => ({
    pileCards: state.game.pileCards,
    noOfCurrentlyPiledCards: state.game.noOfCurrentlyPiledCards,
  }));

  const lastCard = pileCards.at(-1);

  if (!lastCard) return null;

  return (
    <Box hidden={noOfCurrentlyPiledCards === 0}>
      <GameCard image={lastCard?.image} />
    </Box>
  );
};

export default CardsPile;
