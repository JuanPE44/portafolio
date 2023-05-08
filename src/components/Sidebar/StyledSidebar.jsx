import styled from "styled-components";
import { colors } from "../../contants/theme";

export const Aside = styled.aside`
  min-width: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #262118;
  height: 100vh;
  z-index: 200;

  .icon-code {
    margin-top: 3rem;
    font-size: 3rem;
    color: ${colors.white};
  }

  .icons-sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .titulo-container {
    position: absolute;
    bottom: 50%;
    transform: translateY(-100%);

    .titulo {
      max-width: 2rem;
      transform: rotate(90deg);
      text-transform: uppercase;
      font-size: 1.7rem;
      color: ${colors.white};
      font-weight: 300;
      padding: 0 2rem;
      letter-spacing: 0.3rem;
      transition: 0s;
    }
  }
  .Bienvenido {
    animation: bienvenido 0.3s ease alternate;
  }

  .Sobremi {
    animation: sobremi 0.3s ease alternate;
  }

  .Proyectos {
    animation: proyectos 0.3s ease alternate;
  }

  .Habilidades {
    animation: habilidades 0.3s ease alternate;
  }

  @media only screen and (max-width: 768px) {
    max-height: 10rem;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .icon-code {
      margin-top: 0;
      margin-left: 2rem;
    }
    .icons-sidebar {
      flex-direction: row;
      margin-bottom: 0;
      margin-right: 2rem;
    }

    .titulo-container {
      position: static;
      overflow: hidden;
      transform: none;

      .titulo {
        max-width: none;
        transform: rotate(0deg);
      }
    }
  }

  @media only screen and (max-width: 550px) {
    justify-content: space-between;
    .titulo-container {
      .titulo {
        font-size: 1.5rem;
      }
    }

    .icon-code {
      transform: scale(0.7);
    }

    .icons-sidebar {
      transform: scale(0.7);
      margin-right: 1rem;
    }
  }

  @keyframes bienvenido {
    0% {
      transform: scale(1) rotateY(180deg) translateY(-100%);
      color: transparent;
    }
    100% {
      transform: scale(1) rotateY(360deg) translateY(-100%);
      color: #fff;
    }
  }
  @keyframes sobremi {
    0% {
      transform: scale(1) rotateY(180deg) translateY(-100%);
      color: transparent;
    }
    100% {
      transform: scale(1) rotateY(360deg) translateY(-100%);
      color: #fff;
    }
  }
  @keyframes proyectos {
    0% {
      transform: scale(1) rotateY(180deg) translateY(-100%);
      color: transparent;
    }
    100% {
      transform: scale(1) rotateY(360deg) translateY(-100%);
      color: #fff;
    }
  }
  @keyframes habilidades {
    0% {
      transform: scale(1) rotateY(180deg) translateY(-100%);
      color: transparent;
    }
    100% {
      transform: scale(1) rotateY(360deg) translateY(-100%);
      color: #fff;
    }
  }
`;
