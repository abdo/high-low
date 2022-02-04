import Box from 'components/lib/Box';
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
      <GameCard />
      <Box
        w='100%'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <GameCard />
        <GameCard />
      </Box>
      <Box />
      <Box
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%,-50%)'
      >
        <GameCard />
      </Box>
    </Box>
  );
};

export default Main;
