import styled from "styled-components";
import { colors } from "../../contants/theme";
import IconLinkedin from "../../common/iconos/IconLinkedin";
import IconGithub from "../../common/iconos/IconGithub";
import IconInstagram from "../../common/iconos/IconInstagram";
import { useGlobalContext } from "../../common/hooks/useGlobalContext";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  const {currentPage} = useGlobalContext()

  return (
    <Aside className="sidebar-content">
      <FontAwesomeIcon icon={faUserSecret} className="icon-code" />
      <h1>{currentPage}</h1>
      <div className="icons-sidebar">
        <IconInstagram color={colors.white} width={32} height={32}/>
        <IconLinkedin color={colors.white} width={32} height={32}/>
        <IconGithub color={colors.white} width={32} height={32}/>
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  min-width: 10rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #262118;
  height: 100vh;
  z-index: 100;

  .icon-code {
    margin-top: 2rem;
    font-size: 3rem;
    color: ${colors.primary};
  }

  .icons-sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 4rem;
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
