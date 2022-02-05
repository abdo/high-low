import Box from 'components/lib/Box';
import Button from 'components/lib/Button';
import Text from 'components/lib/Text';
import theme from 'style/theme';

const PlayerArea = ({ playerInfo: { name, id } }) => {
  return (
    <Box m='5rem' textAlign='center'>
      <Button bgc={theme.colors.mainLight}>{name || `Player ${id}`}</Button>
      <Box bgc={theme.colors.white} borderRadius='2rem' p='2rem' m='3rem 0 0'>
        <Text type='h3' color={theme.colors.main}>
          No of points
        </Text>
        <Text type='h2' color={theme.colors.main}>
          8
        </Text>
      </Box>
    </Box>
  );
};

export default PlayerArea;
