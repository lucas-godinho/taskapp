import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const pxToRem = (value: number) => {
  const result = value / 16;

  return `${result}rem`;
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export const ContainerApp = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;
