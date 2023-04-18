import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext("");

export const GlobalContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("BIENVENIDO");

  return (
    <GlobalContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </GlobalContext.Provider>
  );
};
