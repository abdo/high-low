import Box from 'components/lib/Box';
import CardsDeck from 'components/CardsDeck';
import CardsPile from 'components/CardsPile';
import Modal from 'components/lib/Modal';
import PlayersArea from 'components/PlayersArea';
import Text from 'components/lib/Text';
import useGameIntro from './hooks/useGameIntro';

const Main = () => {
  const { hasGameStarted } = useGameIntro({});

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
      {hasGameStarted && (
        <>
          <Box position='absolute' top='1rem' left='1rem' pointer>
            <Text type='h4' title='High Low!'>
              ⬆️⬇️
            </Text>
          </Box>
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
            <PlayersArea />
          </Box>
        </>
      )}
      <Modal />
    </Box>
  );
};

export default Main;
