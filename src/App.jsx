import styled from "styled-components";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import AboutMe from "./pages/AboutMe.jsx/AboutMe";
import Home from "./pages/Home/Home";


export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Main>
        <Home />
        <AboutMe />
      </Main>
    </div>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
`
