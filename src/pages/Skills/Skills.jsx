import styled from "styled-components";
import { colors } from "../../contants/theme";
import {
  SvgCSS,
  SvgHTML,
  SvgJs,
  SvgReact,
  SvgTaildwind,
  SvgSass,
} from "../../common/icons/svgsIcons";
import { IconSvg } from "../../common/icons/IconSvg";

const ICON_SIZE = 10;

export default function Skills() {
  return (
    <Container>
      <Content>
        <div className="skills-container">
          <h1>Habilidades</h1>
          <div className="languajes-container">
            <IconSvg width={ICON_SIZE} height={ICON_SIZE}>
              <SvgHTML />
            </IconSvg>
            <IconSvg width={ICON_SIZE} height={ICON_SIZE}>
              <SvgCSS />
            </IconSvg>
            <IconSvg width={ICON_SIZE} height={ICON_SIZE}>
              <SvgJs />
            </IconSvg>
            <IconSvg width={ICON_SIZE} height={ICON_SIZE}>
              <SvgReact />
            </IconSvg>
            <IconSvg width={ICON_SIZE} height={ICON_SIZE}>
              <SvgSass />
            </IconSvg>
            <IconSvg width={ICON_SIZE} height={ICON_SIZE}>
              <SvgTaildwind />
            </IconSvg>
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
  width: 100%;
  padding-left: 10rem;
  z-index: 100;

  .skills-container {
    display: grid;
    place-items: center;
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
      justify-content: center;
      max-width: 500px;
      gap: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-left: 0;
  }
`;
