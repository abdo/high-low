import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${({ theme, bgc, disabled }) =>
    disabled ? theme.colors.gray : bgc || theme.colors.main};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 20px;
  padding: 20px 24px;
  border-radius: 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export default ButtonStyled;
