import Box from 'components/lib/Box';
import CardsDeck from 'components/CardsDeck';
import GameCard from 'components/GameCard';

const Main = () => {
  return (
    <Box
      w='100%'
      h='100%'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      flexDirection='column'
      position='relative'
    >
      <CardsDeck />
      <Box
        w='100%'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <GameCard image='https://deckofcardsapi.com/static/img/4D.png' />
        <GameCard image='https://deckofcardsapi.com/static/img/4D.png' />
      </Box>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%,-50%)'
      >
        <GameCard image='https://deckofcardsapi.com/static/img/4D.png' />
      </Box>
    </Box>
  );
};

export default Main;
