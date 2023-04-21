import { Aside } from "./StyledSidebar";
import { colors } from "../../contants/theme";
import { useGlobalContext } from "../../common/hooks/useGlobalContext";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconSvg } from "../../common/icons/IconSvg";
import {
  SvgInstagram,
  SvgLinkedin,
  SvgGithub,
} from "../../common/icons/svgsIcons";

export default function Sidebar() {
  const { currentPage } = useGlobalContext();

  return (
    <Aside className="sidebar-content">
      <FontAwesomeIcon icon={faUserSecret} className="icon-code" />
      <div className={`titulo-container ${currentPage}`}>
        <h1 className="titulo">{currentPage}</h1>
      </div>
      <div className="icons-sidebar">
        <IconSvg width={3} height={3} color={colors.white}>
          <SvgInstagram />
        </IconSvg>
        <IconSvg
          width={3}
          height={3}
          color={colors.white}
          href="https://www.linkedin.com/in/juan-peñalba-0025b6246/"
        >
          <SvgLinkedin />
        </IconSvg>
        <IconSvg
          href="https://github.com/JuanPE44"
          color={colors.white}
          width={3}
          height={3}
        >
          <SvgGithub />
        </IconSvg>
      </div>
    </Aside>
  );
}
