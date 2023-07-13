import React, { FC } from "react";

const BetTableHeader: FC<{ eventCount: number }> = ({ eventCount }) => {
  return (
    <thead>
      <tr>
        <th>Event Count: {eventCount}</th>
        <th>Yorumlar</th>
        <th></th>
        <th>1</th>
        <th>0</th>
        <th>2</th>
        <th>Alt</th>
        <th>Üst</th>
        <th>H1</th>
        <th>1</th>
        <th>X</th>
        <th>2</th>
        <th>H2</th>
        <th>1-X</th>
        <th>1-2</th>
        <th>X-2</th>
        <th>Var</th>
        <th>Yok</th>
        <th>+99</th>
      </tr>
    </thead>
  );
};

export default BetTableHeader;
