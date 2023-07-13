import React, { FC } from "react";
import Bet from "../../models/Bet";

const BetLabelCell: FC<{ bet: Bet }> = (props) => {
  const { bet } = props;
  return <td>{bet.name}</td>;
};

export default BetLabelCell;
