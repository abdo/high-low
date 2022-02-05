import GameCard from 'components/GameCard';
import { useSelector } from 'react-redux';

const CardsPile = () => {
  const { pileCards } = useSelector((state) => ({
    pileCards: state.game.pileCards,
  }));

  const lastCard = pileCards.at(-1);

  if (!lastCard) return null;

  return <GameCard image={lastCard?.image} />;
};

export default CardsPile;
