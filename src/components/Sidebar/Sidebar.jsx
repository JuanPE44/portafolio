import { Aside } from "./StyledSidebar";
import { colors } from "../../contants/theme";
import { useGlobalContext } from "../../common/hooks/useGlobalContext";
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
      <div className="icon-github">
        <IconSvg
          href="https://github.com/JuanPE44"
          color={colors.white}
          width={3}
          height={3}
          icon={<SvgGithub />}
        />
      </div>

      <div className={`titulo-container ${currentPage}`}>
        <h1 className="titulo">{currentPage}</h1>
      </div>
      <div className="icons-sidebar">
        <IconSvg
          width={3}
          height={3}
          color={colors.white}
          icon={<SvgInstagram />}
        />

        <IconSvg
          width={3}
          height={3}
          color={colors.white}
          href="https://www.linkedin.com/in/juan-peñalba-0025b6246/"
          icon={<SvgLinkedin />}
        />
      </div>
    </Aside>
  );
}
