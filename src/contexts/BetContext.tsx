import { createContext } from "react";
import { Bet } from "../types";

type BetContextValue = Bet[];

const BetContext = createContext<BetContextValue | null>(null);

export default BetContext;
