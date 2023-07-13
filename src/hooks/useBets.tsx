import { useContext } from "react";
import BetContext from "../contexts/BetContext";

const useBets = () => {
  const context = useContext(BetContext);
  if (!context) {
    throw new Error("useBets must be used within a BetProvider");
  }
  return context;
};

export default useBets;
