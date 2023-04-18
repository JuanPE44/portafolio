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
  z-index: 100;
  padding-left: 10rem;

  .aboutme-container {
    margin: 3rem;
    padding: 1rem 2rem;
    border-right: 1px dashed ${colors.primary};

    h1 {
      font-size: 4rem;
      color: ${colors.secondary};
      font-weight: 700;
      letter-spacing: 0.1rem;
    }

    p {
      max-width: 550px;
      text-align: justify;
      font-size: 2rem;
      color: ${colors.white};
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
`;
