import { createGlobalStyle } from "styled-components";
import { colors } from "../contants/theme";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;

    &::-webkit-scrollbar {
      width: 10px; 
      background-color: #262118; 
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.primary};
      border-radius: 5px;
    }
  }
  a:link, a:visited, a:active {
    text-decoration:none;
  }
  button {
    border: none;
    cursor: pointer;
  }
`;
