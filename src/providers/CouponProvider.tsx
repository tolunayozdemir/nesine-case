import React, { FunctionComponent, PropsWithChildren, useEffect, useMemo, useState } from "react";
import CouponContext from "../contexts/CouponContext";
import Bet from "../models/Bet";
import useEvents from "../hooks/useEvents";

const CouponProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [coupon, setCoupon] = useState<Bet[]>([]);
  const events = useEvents();

  useEffect(() => {
    /** @TODO
     * We need to subscribe to new coming game events to sync our bets on the coupon.
     * Bet can be closed or updated.
     */
  }, [events]);

  const value = useMemo(() => {
    const isBetOnCoupon = (newBet: Bet) => {
      return coupon.findIndex((bet) => bet.id === newBet.id) > -1;
    };

    const onBet = (newBet: Bet) => {
      const { eventId } = newBet;
      let newCoupon = [...coupon];
      const eventIndex = coupon.findIndex((bet) => bet.eventId === eventId);

      if (eventIndex > -1) {
        newCoupon = [...coupon.slice(0, eventIndex), ...coupon.slice(eventIndex + 1)];
      }

      if (!isBetOnCoupon(newBet)) {
        newCoupon = [...newCoupon, newBet];
      }

      setCoupon(newCoupon);
    };

    return { coupon, onBet, isBetOnCoupon };
  }, [coupon]);

  return <CouponContext.Provider value={value}>{children}</CouponContext.Provider>;
};

export default CouponProvider;
