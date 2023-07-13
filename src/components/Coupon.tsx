import React from "react";
import useCoupon from "../hooks/useCoupon";

const Coupon = () => {
  const { coupon } = useCoupon();

  console.log(coupon);
  return <div></div>;
};

export default Coupon;
