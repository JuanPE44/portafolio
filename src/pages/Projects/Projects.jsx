import styled from "styled-components";
import imgProjects from "../../assets/fondo-home.jpg";
import { colors } from "../../contants/theme";
import CardProject from "../../components/CardProject/CardProject";

export default function Projects() {
  return (
    <Container>
      <img className="img-container" src={imgProjects} alt="" />
      <Content>
        <div className="projects-container">
          <h1>Proyectos</h1>
          <ul>
            <CardProject
              title="app-peliculas"
              description="En este proyecto, he desarrollado una página web interactiva que permite a los usuarios explorar y buscar películas utilizando React, junto con la API de The Movie Database (TMDB)"
              technologies="React - JavaScript - styled-components"
              githubHref="https://github.com/JuanPE44/app-peliculas"
            />
            <CardProject
              title="Ajedrez"
              description="En este proyecto, he desarrollado un ajedrez interactivo utilizando tecnologías web como JavaScript, HTML y CSS. Me he inspirado en el popular sitio web de ajedrez, Chess.com, para recrear su estilo y ofrecer a los usuarios una experiencia similar."
              technologies="HTML - CSS - JavaScript"
              githubHref="https://github.com/JuanPE44/ajedrez"
            />
            <CardProject
              title="Aplicacion del clima"
              description="Esta página ofrece información en tiempo real sobre el clima de diferentes ciudades del mundo gracias a la API del clima WeatherAPI. Utilicé React para crear una experiencia de usuario fluida e interactiva. También utilicé Sass para la estilización de la página y hacerla más escalable"
              technologies="React - JavaScript - Sass"
              githubHref="https://github.com/JuanPE44/app-clima"
            />
            <CardProject
              title="Tetris"
              description="Desarrollé un juego de Tetris utilizando HTML, CSS y JavaScript. El juego presenta los desafíos clásicos del Tetris, como la caída de bloques y la rotación de los mismos."
              technologies="HTML - CSS - JavaScript"
              githubHref="https://github.com/JuanPE44/tetris"
            />
            <CardProject
              title="2048"
              description="Use HTML y CSS para diseñar la interfaz de usuario y JavaScript para programar la lógica del juego. También implementé animaciones fluidas y efectos visuales para hacer que el juego sea más atractivo para el usuario."
              technologies="HTML - CSS - JavaScript"
              githubHref="https://github.com/JuanPE44/2048"
            />
            <CardProject
              title="Sudoku"
              description="Sudoku desarrollado con HTML, Sass y JavaScript. Este proyecto me permitió poner en práctica mis habilidades en HTML, Sass y JavaScript y aprender más sobre diseño web."
              technologies="HTML - Sass - JavaScript"
              githubHref="https://github.com/JuanPE44/sudoku"
            />
          </ul>
        </div>
      </Content>
      <div className="observer" id="Proyectos"></div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;

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
    transform: rotate(180deg);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

const Content = styled.div`
  z-index: 100;
  width: 100%;
  max-width: 900px;
  padding-bottom: 10rem;
  padding-left: 10rem;

  .projects-container {
    h1 {
      text-align: center;
      font-size: 5rem;
      color: ${colors.white};
      margin-bottom: 7rem;
    }

    ul {
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 5rem;
      justify-content: center;
      place-items: center;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 550px) {
    padding-bottom: 5rem;
    .projects-container {
      h1 {
        font-size: 3rem;
      }
    }
  }
`;
