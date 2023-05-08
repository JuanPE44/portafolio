import styled from "styled-components";
import imgAboutMe from "../../assets/fondo-home.jpg";
import { colors } from "../../contants/theme";

export default function AboutMe() {
  return (
    <Container>
      <img className="img-container" src={imgAboutMe} alt="" />
      <Content>
        <div className="aboutme-container">
          <h1>Sobre mi</h1>
          <p>
            Desde mi infancia, me ha fascinado la programación y todo lo
            relacionado con la informática. Esto me llevó a estudiar
            programación en una escuela técnica, y también a desarrollar
            habilidades autodidactas en el campo del desarrollo web. Disfruto
            trabajando en equipo y siempre estoy dispuesto a aprender cosas
            nuevas. Además de la programación, tengo una gran pasión por la
            fotografía, el fútbol y los videojuegos, que me permiten mantener un
            equilibrio en mi vida y desarrollar habilidades en diferentes áreas.
          </p>
        </div>
      </Content>
      <div className="observer" id="Sobremi"></div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #262118ef;
    z-index: 10;
  }

  .img-container {
    object-position: bottom;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  padding-left: 10rem;
  z-index: 100;
  display: grid;
  place-items: center;

  .aboutme-container {
    margin: 3rem;
    padding: 1rem 3rem;
    width: max-content;
    background: linear-gradient(90deg, ${colors.primary} 50%, transparent 50%),
      linear-gradient(90deg, ${colors.primary} 50%, transparent 50%),
      linear-gradient(0deg, ${colors.primary} 50%, transparent 50%),
      linear-gradient(0deg, ${colors.primary} 50%, transparent 50%);
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: 0, 0, 0, 2px 15px;
    animation: border-dance 10s infinite linear;

    h1 {
      font-size: 4rem;
      color: ${colors.secondary};
      font-weight: 700;
      letter-spacing: 0.1rem;
    }

    p {
      max-width: 550px;
      text-align: justify;
      font-size: 1.8rem;
      color: ${colors.white};
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 550px) {
    .aboutme-container {
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }

  @keyframes border-dance {
    0% {
      background-position: 0 0, 100% 100%, 0 100%, 100% 0;
    }
    100% {
      background-position: 100% 0, 0 100%, 0 0, 100% 100%;
    }
  }
`;
