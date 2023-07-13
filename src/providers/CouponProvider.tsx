import React, {
  FunctionComponent,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import CouponContext from "../contexts/CouponContext";
import Bet from "../models/Bet";

const CouponProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [coupon, setCoupon] = useState<Bet[]>([]);

  const isBetOnCoupon = (newBet: Bet) => {
    return coupon.findIndex((bet) => bet.id === newBet.id) > -1;
  };

  const onBet = (newBet: Bet) => {
    const { eventId } = newBet;
    let newCoupon = [...coupon];
    const eventIndex = coupon.findIndex((bet) => bet.eventId === eventId);

    if (eventIndex > -1) {
      newCoupon = [
        ...coupon.slice(0, eventIndex),
        ...coupon.slice(eventIndex + 1),
      ];
    }

    if (!isBetOnCoupon(newBet)) {
      newCoupon = [...newCoupon, newBet];
    }

    setCoupon(newCoupon);
  };

  const value = useMemo(() => {
    return { coupon, onBet, isBetOnCoupon };
  }, [coupon]);

  return (
    <CouponContext.Provider value={value}>{children}</CouponContext.Provider>
  );
};

export default CouponProvider;
