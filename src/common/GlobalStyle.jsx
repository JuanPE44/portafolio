
import { createGlobalStyle  } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;
  }
  a:link, a:visited, a:active {
    text-decoration:none;
  }
  button {
    border: none;
    cursor: pointer;
  }
`;