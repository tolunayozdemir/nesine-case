import React, {
  FunctionComponent,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import { Bet } from "../types";
import CouponContext from "../contexts/CouponContext";

export interface CouponItem {
  bet: Bet;
  OCG_ID: string;
  OC_ID: string;
}

const CouponProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [coupon, setCoupon] = useState<CouponItem[]>([]);

  const isBetPlaced = (couponItem: CouponItem) => {
    const { bet, OCG_ID, OC_ID } = couponItem;

    return (
      coupon.findIndex((c) => {
        return (
          bet.NID === c.bet.NID && c.OCG_ID === OCG_ID && c.OC_ID === OC_ID
        );
      }) > -1
    );
  };

  const onBet = (couponItem: CouponItem) => {
    const { bet } = couponItem;

    let newCoupon = [...coupon];

    const gameIndex = coupon.findIndex((c) => c.bet.NID === bet.NID);

    if (gameIndex > -1) {
      newCoupon = [
        ...coupon.slice(0, gameIndex),
        ...coupon.slice(gameIndex + 1),
      ];
    }

    if (isBetPlaced(couponItem)) {
      setCoupon(newCoupon);
    } else {
      setCoupon([...newCoupon, couponItem]);
    }
  };

  const value = useMemo(() => {
    return { coupon, onBet, isBetPlaced };
  }, [coupon]);

  return (
    <CouponContext.Provider value={value}>{children}</CouponContext.Provider>
  );
};

export default CouponProvider;
