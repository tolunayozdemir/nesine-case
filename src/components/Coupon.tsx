import React, { Fragment } from "react";
import useCoupon from "../hooks/useCoupon";

const Coupon = () => {
  const { coupon } = useCoupon();

  const totalBetOdd = coupon.reduce((totalOdd, bet) => {
    const { odd } = bet;

    return parseFloat(odd) * (totalOdd || 1);
  }, 0);

  return (
    <div className="coupon">
      {coupon.map((bet) => {
        const { eventName, odd, mbs, eventId, code } = bet;

        return (
          <Fragment key={eventId}>
            <div className="coupon-item">
              <span>{mbs}</span>
              <span>Kod: {code}</span>
              <span>Maç: {eventName}</span>
              <span>
                <b>Oran: {odd}</b>
              </span>
            </div>
            <hr />
          </Fragment>
        );
      })}
      <div className="coupon-total">Toplam Tutar: {totalBetOdd && totalBetOdd.toFixed(2)} TL</div>
    </div>
  );
};

export default Coupon;
