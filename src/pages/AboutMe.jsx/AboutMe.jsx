
import styled from "styled-components";
import imgAboutMe from "../../assets/fondo-home.jpg";
import { colors } from "../../contants/theme";

export default function AboutMe () {
  return (
    <Container>
      <img className="img-container" src={imgAboutMe} alt="" />
      <Content>

      </Content>
    </Container>
  )
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

`;
