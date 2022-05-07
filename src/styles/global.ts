import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  button {
    border: none;
    background: none;
    
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
