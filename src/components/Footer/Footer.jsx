import styled from "styled-components";
import { colors } from "../../contants/theme";
import { IconSvg } from "../../common/icons/IconSvg";
import { SvgGmail, SvgPhone } from "../../common/icons/svgsIcons";

export default function Footer() {
  return (
    <Container>
      <div className="gmail-container">
        <IconSvg width={3} height={3}>
          <SvgGmail />
        </IconSvg>
        <span>juantandil123@gmail.com</span>
      </div>
      <div className="phone-container">
      <IconSvg width={3} height={3} color="#fff">
          <SvgPhone />
        </IconSvg>
      <span>+54 2494377662</span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: ${colors.black};
  z-index: 100;
  color: ${colors.white};
  padding: 5rem 5rem 5rem 14rem;
  font-size: 2rem;

  .gmail-container, .phone-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 1rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;
    font-size: 1.5rem;
  }
`;
