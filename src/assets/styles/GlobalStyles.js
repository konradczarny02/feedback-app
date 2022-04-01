import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  html {
    box-sizing: border-box;
  }
    
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Jost', sans-serif;
    background-color: red;
    width: 100%;
    min-height: 100vh;
  }
  
  a, input, button, textarea {
    font-family: 'Jost', sans-serif;
  }
`;
