import Box from 'components/lib/Box';
import Button from 'components/lib/Button';
import Text from 'components/lib/Text';
import { motion } from 'framer-motion';
import { possibleGuesses } from 'store/game/mapper';
import theme from 'style/theme';

const PlayerArea = ({
  playerInfo: { name, id, totalPoints },
  lastPiledCard,
  showQuestion,
  onAnswerQuestion,
  noOfSuccessfulConsecutiveGuesses,
  isInDanger,
}) => {
  return (
    <Box
      m='-30rem 6rem 0'
      mt='-2rem 2rem 1rem'
      textAlign='center'
      position='relative'
    >
      <Box
        as={motion.div}
        drag
        dragSnapToOrigin={true}
        textAlign='center'
        hidden={!showQuestion || !lastPiledCard?.value}
        position='absolute'
        top='-105%'
        bgc={theme.colors.mainLight}
        p='1rem'
        borderRadius='0.8rem'
      >
        <Text>
          {name}, will the next card be higher or lower than{' '}
          {lastPiledCard?.value}?{' '}
        </Text>

        <Button
          containerProps={{ m: '1rem' }}
          onClick={() => onAnswerQuestion({ answer: possibleGuesses.high })}
        >
          Higher
        </Button>
        <Button
          containerProps={{ m: '1rem' }}
          onClick={() => onAnswerQuestion({ answer: possibleGuesses.low })}
        >
          Lower
        </Button>
      </Box>
      <Box bgc={theme.colors.mainLight} p='1rem' m='2rem 0 0' noSelect pointer>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Text fw='bold' containerProps={{ m: '0 1rem 0 0' }}>
            {name || `Player ${id}`}
          </Text>
          <Box hidden={!showQuestion}>
            {Array.from({ length: noOfSuccessfulConsecutiveGuesses }).map(
              (_, i) => (
                <span key={i}> ✅ </span>
              ),
            )}
          </Box>
        </Box>
      </Box>
      <Box bgc={theme.colors.white} borderRadius='2rem' p='2rem' m='3rem 0 0'>
        <Text type='h3' color={theme.colors.main}>
          No of points
        </Text>
        <Text
          type='h2'
          color={isInDanger ? theme.colors.danger : theme.colors.green}
        >
          {totalPoints}
        </Text>
      </Box>
    </Box>
  );
};

export default PlayerArea;
