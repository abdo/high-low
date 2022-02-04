import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) =>
    `radial-gradient(${theme.colors.mainLight}, ${theme.colors.main})`};
`;
