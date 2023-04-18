import styled from "styled-components";
import { colors } from "../../contants/theme";

export default function Footer() {
  return (
    <Container>
      <div>juantandil123@gmail.com</div>
      <div>+54 2494377662</div>
    </Container>
  );
}

const Container = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 3rem;
  background: ${colors.black};
  z-index: 100;
  color: ${colors.white};
  font-size: 2rem;
`;
