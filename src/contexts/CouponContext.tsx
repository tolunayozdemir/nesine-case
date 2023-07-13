import { createContext } from "react";
import { Event } from "../types";
import Bet from "../models/Bet";

interface CouponContext {
  coupon: Bet[];
  onBet: (bet: Bet) => void;
  isBetOnCoupon: (bet: Bet) => boolean;
}

const CouponContext = createContext<CouponContext | null>(null);

export default CouponContext;
