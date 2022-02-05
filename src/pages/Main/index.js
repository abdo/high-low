import Box from 'components/lib/Box';
import CardsDeck from 'components/CardsDeck';
import CardsPile from 'components/CardsPile';
import Modal from 'components/lib/Modal';
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
      <Box h='33%' m='5rem 0 0' mt='2rem 0 0'>
        <CardsDeck />
      </Box>

      <Box
        h='33%'
        m='5rem 0 0'
        mt='2rem 0 0'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <CardsPile />
      </Box>

      <Box
        w='100%'
        h='33%'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        {playersInfo.map((info) => (
          <PlayerArea key={info.id} playerInfo={info} />
        ))}
      </Box>
      <Modal />
    </Box>
  );
};

export default Main;
