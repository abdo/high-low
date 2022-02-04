import Box from 'components/reusable/Box';
import PropTypes from 'prop-types';
import TextStyled from './style';

const Text = ({ children, containerProps, ...props }) => {
  return (
    <Box span m='1rem 0' display='block' {...containerProps}>
      <TextStyled {...props}>{children}</TextStyled>
    </Box>
  );
};

Text.propTypes = {
  type: PropTypes.oneOf([
    'beast',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'bLarge',
    'bMedium',
    'bSmall',
    'bExtraSmall',
    'micro',
  ]),
  children: PropTypes.string,
  containerProps: PropTypes.shape({}),
};

Text.defaultProps = {
  children: '',
  containerProps: {},
};

export default Text;
