import React, { FC } from "react";
import Bet from "../../models/Bet";
import useCoupon from "../../hooks/useCoupon";
import { classnames } from "../../utils";

const BetCell: FC<{ bet: Bet }> = (props) => {
  const { bet } = props;
  const { isBetOnCoupon, onBet } = useCoupon();

  const isActive = isBetOnCoupon(bet);
  const onClick = () => onBet(bet);

  return (
    <td
      onClick={onClick}
      className={classnames({
        ["bet-cell"]: true,
        ["bet-cell-active"]: isActive
      })}>
      {bet.odd}
    </td>
  );
};

export default BetCell;
