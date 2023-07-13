import React, { Fragment } from "react";
import useBets from "../hooks/useBets";
import useCoupon from "../hooks/useCoupon";
import { CouponItem } from "../providers/CouponProvider";
import { classnames } from "../utils";

const BetCell = (couponItem: CouponItem) => {
  const { isBetPlaced, onBet } = useCoupon();
  const { bet, OCG_ID, OC_ID } = couponItem;

  const isActive = isBetPlaced(couponItem);
  const onClick = () => onBet({ bet, OC_ID, OCG_ID });

  return (
    <td
      onClick={onClick}
      className={classnames({
        ["bet-cell"]: true,
        ["bet-cell-active"]: isActive,
      })}
    >
      {bet.OCG[OCG_ID]?.OC[OC_ID]?.O}
    </td>
  );
};

const LabelCell = (couponItem: CouponItem) => {
  const { bet, OCG_ID, OC_ID } = couponItem;
  return <td>{bet.OCG[OCG_ID].OC[OC_ID].N}</td>;
};

const BetTable = () => {
  const bets = useBets();

  return (
    <table className="bet-table">
      <tbody>
        {bets.map((bet) => {
          return (
            <Fragment key={bet.NID}>
              <tr>
                <td>
                  {bet.D} {bet.DAY} {bet.LN}
                </td>
                <td>Yorumlar</td>
                <td></td>
                <LabelCell bet={bet} OCG_ID="1" OC_ID="0" />
                <LabelCell bet={bet} OCG_ID="1" OC_ID="1" />
                <td>2</td>
                <LabelCell bet={bet} OCG_ID="5" OC_ID="25" />
                <LabelCell bet={bet} OCG_ID="5" OC_ID="26" />
                <td>H1</td>
                <td>1</td>
                <td>X</td>
                <td>2</td>
                <td>H2</td>
                <LabelCell bet={bet} OCG_ID="2" OC_ID="3" />
                <LabelCell bet={bet} OCG_ID="2" OC_ID="4" />
                <LabelCell bet={bet} OCG_ID="2" OC_ID="5" />
                <td>Var</td>
                <td>Yok</td>
                <td>+99</td>
              </tr>
              <tr>
                <td className="bet-name-cell">
                  <b>{bet.C}</b> {bet.T} {bet.N}
                </td>
                <td>Yorumlar</td>
                <td>{bet.OCG[1].MBS}</td>
                <BetCell bet={bet} OCG_ID="1" OC_ID="0" />
                <BetCell bet={bet} OCG_ID="1" OC_ID="1" />
                <td></td>
                <BetCell bet={bet} OCG_ID="5" OC_ID="25" />
                <BetCell bet={bet} OCG_ID="5" OC_ID="26" />
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <BetCell bet={bet} OCG_ID="2" OC_ID="3" />
                <BetCell bet={bet} OCG_ID="2" OC_ID="4" />
                <BetCell bet={bet} OCG_ID="2" OC_ID="5" />
                <td></td>
                <td></td>
                <td>3</td>
              </tr>
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default BetTable;
