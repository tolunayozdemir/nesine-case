import { createContext } from "react";
import { CouponItem } from "../providers/CouponProvider";

interface CouponContext {
  coupon: CouponItem[];
  onBet: (bet: CouponItem) => void;
  isBetPlaced: (bet: CouponItem) => boolean;
}

const CouponContext = createContext<CouponContext | null>(null);

export default CouponContext;
