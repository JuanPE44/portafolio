import styled from "styled-components";
import imgHome from "../../assets/fondo-home.jpg";
import { colors } from "../../contants/theme";

export default function Home() {
  return (
    <Container>
      <img className="img-container" src={imgHome} alt="" />
      <Content>
        <div></div>
        <h1 className="name-container">Juan Peñalba</h1>
        <span>Desarrollador FrontEnd</span>
      </Content>
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
    color: ${colors.white};
    font-weight: 900;
    font-size: 6rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 3rem;
    color: ${colors.secondary};
    font-weight: 400;
  }
`;
