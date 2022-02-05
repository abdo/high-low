import Box from 'components/lib/Box';
import CardsDeck from 'components/CardsDeck';
import CardsPile from 'components/CardsPile';
import PlayerArea from 'components/PlayerArea';
import { useSelector } from 'react-redux';

const Main = () => {
  const { playersInfo } = useSelector((state) => ({
    playersInfo: state.players.playersInfo,
  }));

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
        h='100%'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        {playersInfo.map((info) => (
          <PlayerArea key={info.id} playerInfo={info} />
        ))}
      </Box>

      <Box
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%,-50%)'
      >
        <CardsPile />
      </Box>
    </Box>
  );
};

export default Main;
