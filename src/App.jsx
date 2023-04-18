import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { GlobalContextProvider } from "./context/GlobalContext";

export default function App() {
  return (
    <GlobalContextProvider>
      <div className="app-container">
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </GlobalContextProvider>
  );
}
