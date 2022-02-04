import BoxStyled from './style';

const Box = ({ children, span, ...props }) => {
  return (
    <BoxStyled as={span ? 'span' : 'div'} $span={span} {...props}>
      {children}
    </BoxStyled>
  );
};

export default Box;
