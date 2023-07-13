import React from "react";
import BetProvider from "./providers/BetProvider";
import CouponProvider from "./providers/CouponProvider";
import BetTable from "./components/BetTable";
import Coupon from "./components/Coupon";

const App = () => {
  return (
    <BetProvider>
      <CouponProvider>
        <Coupon />
        <BetTable />
      </CouponProvider>
    </BetProvider>
  );
};

export default App;
