import Box from 'components/lib/Box';
import { InputStyled } from './style';
import Text from 'components/lib/Text';
import theme from 'style/theme';

const Input = ({
  containerProps,
  label,
  placeholder,
  disabled,
  name,
  ...props
}) => {
  return (
    <Box span m='1rem 0' display='block' {...containerProps}>
      <Text
        type='bExtraSmall'
        fw='600'
        containerProps={{ m: '0 0 4px 2px' }}
        hidden={!label}
        color={theme.colors.white}
      >
        {label}
      </Text>

      <Box position='relative'>
        <InputStyled
          {...props}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
        />
      </Box>
    </Box>
  );
};

Input.defaultProps = {
  placeholder: 'Type here..',
  w: '100%',
  fz: '16px',
  borderRadius: '8px',
  h: '56px',
  p: '16px',
};

export default Input;
