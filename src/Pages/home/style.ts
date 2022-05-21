import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.main`
  width: 100%;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
