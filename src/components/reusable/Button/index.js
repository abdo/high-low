import Box from 'components/reusable/Box';
import ButtonStyled from './style';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ containerProps, children, ...props }) => {
  return (
    <Box
      span
      m='1rem 0'
      display='block'
      {...containerProps}
      position='relative'
    >
      <ButtonStyled
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        {...props}
      >
        {children}
      </ButtonStyled>
    </Box>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  containerProps: PropTypes.shape({}),
};

Button.defaultProps = {
  onClick: () => {},
  containerProps: {},
};

export default Button;
