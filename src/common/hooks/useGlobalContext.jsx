import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};