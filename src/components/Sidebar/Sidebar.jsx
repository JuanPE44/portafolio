import styled from "styled-components";
import { colors } from "../../contants/theme";
import IconLinkedin from "../../common/iconos/IconLinkedin";
import IconGithub from "../../common/iconos/IconGithub";

export default function Sidebar() {
  return (
    <Aside className="sidebar-content">
      <div>icono</div>
      <h1>Bienvenido</h1>
      <div className="icons-sidebar">
        <IconLinkedin color={colors.white} width={32} height={32}/>
        <IconGithub color={colors.white} width={32} height={32}/>
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  min-width: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #262118;
  height: 100vh;
  z-index: 100;

  .icons-sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;
  }

  h1 {
    position: absolute;
    max-width: 2rem;
    bottom: 50%;
    transform: rotate(90deg) translateX(-50%);
    text-transform: uppercase;
    font-size: 2.5rem;
    color: ${colors.white};
    font-weight: 300;
    padding: 0 2rem;
    letter-spacing: 0.1rem;
  }
`;
