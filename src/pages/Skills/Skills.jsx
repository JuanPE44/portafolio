import styled from "styled-components";
import imgSkills from "../../assets/fondo-home.jpg";
import { colors } from "../../contants/theme";
import IconHTML from "../../common/icons/IconHTML";
import IconCSS from "../../common/icons/IconCSS";
import IconJS from "../../common/icons/IconJS";
import IconSass from "../../common/icons/IconSass";
import IconReact from "../../common/icons/IconReact";
import IconTailWind from "../../common/icons/IconTailWind";

const ICON_SIZE = 100;

export default function Skills() {
  return (
    <Container>
      <Content>
        <div className="skills-container">
          <h1>Habilidades</h1>
          <div className="languajes-container">
            <IconReact width={ICON_SIZE} height={ICON_SIZE} />
            <IconJS width={ICON_SIZE} height={ICON_SIZE} />
            <IconHTML width={ICON_SIZE} height={ICON_SIZE} />
            <IconCSS width={ICON_SIZE} height={ICON_SIZE} />
            <IconSass width={ICON_SIZE} height={ICON_SIZE} />
            <IconTailWind width={ICON_SIZE} height={ICON_SIZE} />
          </div>
        </div>
      </Content>
      <div className="observer" id="Habilidades"></div>
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
`;

const Content = styled.div`
  z-index: 100;
  padding-left: 10rem;

  .skills-container {
    h1 {
      font-size: 5rem;
      color: ${colors.white};
    }

    h3 {
      font-size: 2.5rem;
      color: ${colors.primary};
    }

    .languajes-container {
      display: flex;
      flex-wrap: wrap;
      max-width: 500px;
      gap: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-left: 0;
  }
`;
