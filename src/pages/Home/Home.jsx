import styled from "styled-components";
import imgHome from "../../assets/fondo-home.jpg";
import { colors } from "../../contants/theme";
import { useGlobalContext } from "../../common/hooks/useGlobalContext";

export default function Home() {
  const { currentPage } = useGlobalContext();
  return (
    <Container page={currentPage}>
      <img className="img-container" src={imgHome} alt="" />
      <Content>
        <div className="name-container">
          <h1 className="name">Juan Peñalba</h1>
          <span>Desarrollador FrontEnd</span>
        </div>
      </Content>
      <div className="observer" id="Bienvenido"></div>
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
    object-position: center;
    object-fit: cover;
    position: fixed;
    transform: ${(props) =>
      props.page !== "Habilidades" && props.page !== "Proyectos"
        ? "rotate(0)"
        : "rotate(180deg)"};
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

const Content = styled.div`
  z-index: 100;

  .perfil-img {
    width: 4rem;
    height: 4rem;
  }

  .name-container {
    .name {
      color: ${colors.white};
      font-weight: 900;
      font-size: 6rem;
      margin: 0.5rem 0;
    }

    span {
      font-size: 3rem;
      color: ${colors.secondary};
      font-weight: 400;
    }
  }

  @media only screen and (max-width: 550px) {
    .name-container {
      .name {
        font-size: 3.5rem;
      }
      span {
        font-size: 2rem;
      }
    }
  }
`;
