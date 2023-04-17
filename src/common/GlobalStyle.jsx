
import { createGlobalStyle  } from "styled-components";
import { colors } from "../contants/theme";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;

    &::-webkit-scrollbar {
      width: 10px; /* Ancho de la barra de scroll */
      background-color: #262118; /* Color de fondo de la barra de scroll */
    }

    /* Estilos para el pulgar de la barra de scroll */
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.primary}; /* Color del pulgar de la barra de scroll */
      border-radius: 5px; /* Radio de borde del pulgar de la barra de scroll */
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