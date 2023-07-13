import React from "react";
import BetProvider from "./providers/EventProvider";
import CouponProvider from "./providers/CouponProvider";
import BetTable from "./components/bet-table/BetTable";
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
