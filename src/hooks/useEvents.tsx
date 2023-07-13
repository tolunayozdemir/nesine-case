import { useContext } from "react";
import EventContext from "../contexts/EventContext";

const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvents must be used within a BetProvider");
  }
  return context;
};

export default useEvents;
