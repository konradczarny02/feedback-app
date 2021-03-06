import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  html {
    box-sizing: border-box;
  }
    
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Jost', sans-serif;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  a, input, button, textarea, select {
    font-family: 'Jost', sans-serif;
  }
`;
