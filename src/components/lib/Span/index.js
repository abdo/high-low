import styled from 'styled-components';

const Span = styled.span`
  display: ${({ display, hidden }) => (hidden ? 'none' : display)};
  color: ${({ color }) => color};
  cursor: ${({ pointer }) => pointer && 'pointer'};
  font-weight: ${({ fw }) => fw};
  font-size: ${({ fz }) => fz};
  margin: ${({ m }) => m};
  border-bottom: ${({ borderBottom }) => borderBottom};
`;

export default Span;
