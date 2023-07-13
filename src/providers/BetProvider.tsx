import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import BetContext from "../contexts/BetContext";
import { Bet } from "../types";

const BetProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [bets, setBets] = useState<Bet[]>([]);

  const fetchBets = async () => {
    const result = await fetch("https://nesine-case-study.onrender.com/bets");
    const bets = await result.json();

    setBets(bets);
  };

  useEffect(() => {
    fetchBets();
  }, []);

  return <BetContext.Provider value={bets}>{children}</BetContext.Provider>;
};

export default BetProvider;
