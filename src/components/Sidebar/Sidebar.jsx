import styled from "styled-components";
import { colors } from "../../contants/theme";
import IconLinkedin from "../../common/icons/IconLinkedin";
import IconGithub from "../../common/icons/IconGithub";
import IconInstagram from "../../common/icons/IconInstagram";
import { useGlobalContext } from "../../common/hooks/useGlobalContext";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  const { currentPage } = useGlobalContext();

  return (
    <Aside className="sidebar-content">
      <FontAwesomeIcon icon={faUserSecret} className="icon-code" />
      <h1>{currentPage}</h1>
      <div className="icons-sidebar">
        <IconInstagram color={colors.white} width={28} height={28} />
        <IconLinkedin color={colors.white} width={28} height={28} />
        <IconGithub
          href="https://github.com/JuanPE44"
          color={colors.white}
          width={28}
          height={28}
        />
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
  z-index: 200;

  .icon-code {
    margin-top: 3rem;
    font-size: 3rem;
    color: ${colors.white};
  }

  .icons-sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  h1 {
    position: absolute;
    max-width: 2rem;
    bottom: 50%;
    transform: rotate(90deg) translateX(-100%);
    text-transform: uppercase;
    font-size: 2.5rem;
    color: ${colors.white};
    font-weight: 300;
    padding: 0 2rem;
    letter-spacing: 0.1rem;
  }

  @media only screen and (max-width: 768px) {
    max-height: 10rem;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .icon-code {
      margin-top: 0;
      margin-left: 2rem;
    }
    .icons-sidebar {
      flex-direction: row;
      margin-bottom: 0;
      margin-right: 2rem;
    }

    h1 {
      position: static;
      transform: rotate(0deg);
      margin-right: 2rem;
    }
  }

  @media only screen and (max-width: 550px) {
    h1 {
      font-size: 1.8rem;
    }

    .icon-code {
      transform: scale(0.7);
    }

    .icons-sidebar {
      transform: scale(0.7);
    }
  }
`;
