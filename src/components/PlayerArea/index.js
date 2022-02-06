import Box from 'components/lib/Box';
import Text from 'components/lib/Text';
import { motion } from 'framer-motion';
import theme from 'style/theme';
import { useState } from 'react';

const PlayerArea = ({ playerInfo: { name, id, totalPoints } }) => {
  const [nameText, setNameText] = useState(name || `Player ${id}`);

  return (
    <Box m='-14rem 6rem 0' mt='-2rem 2rem 1rem' textAlign='center'>
      <Box
        as={motion.div}
        drag
        dragSnapToOrigin={true}
        onDragStart={() => setNameText('Leave me alone 🥺')}
        onDragEnd={() => setNameText(name || `Player ${id}`)}
        bgc={theme.colors.mainLight}
        p='1rem'
        noSelect
        pointer
      >
        <Text fw='bold'>{nameText}</Text>
      </Box>
      <Box bgc={theme.colors.white} borderRadius='2rem' p='2rem' m='3rem 0 0'>
        <Text type='h3' color={theme.colors.main}>
          No of points
        </Text>
        <Text type='h2' color={theme.colors.main}>
          {totalPoints}
        </Text>
      </Box>
    </Box>
  );
};

export default PlayerArea;
