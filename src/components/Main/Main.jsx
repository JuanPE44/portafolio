import styled from "styled-components";
import Home from "../../pages/Home/Home"
import AboutMe from "../../pages/AboutMe/AboutMe";
import Projects from "../../pages/Projects/Projects"
import useObserver from "../../common/hooks/useObserver"
import { useEffect } from "react";
import { useGlobalContext } from "../../common/hooks/useGlobalContext";

export default function Main() {
  const [observer, setElements, entries] = useObserver({
    threshold: 0.5,
    root: null,
  });
  const { setCurrentPage } = useGlobalContext();

  useEffect(() => {
    const divObserver = document.querySelectorAll(".observer");
    setElements(divObserver);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrentPage(entry.target.id);
      }
    });
  }, [entries]);

  return (
    <Container>
      <Home />
      <AboutMe />
      <Projects />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;
