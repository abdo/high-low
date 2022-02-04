import styled from 'styled-components';

export const CardImage = styled.img`
  border-width: ${({ isPiled }) => (isPiled ? '5px' : '0')};
  border-style: ridge;
  border-bottom: 0;
  border-right: 0;
`;
