import React, { FC, Fragment } from "react";
import { Event } from "../../types";
import Bet from "../../models/Bet";
import BetLabelCell from "./BetLabelCell";
import { rowConfig } from "./config";
import BetCell from "./BetCell";

const { betLabeLRowHeight, betRowHeight } = rowConfig;

const BetRow: FC<{ event: Event }> = (props) => {
  const { event } = props;

  const ms1 = new Bet(event, "1", "0");
  const ms0 = new Bet(event, "1", "1");
  const alt = new Bet(event, "5", "25");
  const ust = new Bet(event, "5", "26");
  const ms10c = new Bet(event, "2", "3");
  const ms12c = new Bet(event, "2", "4");
  const ms02c = new Bet(event, "2", "5");

  return (
    <Fragment key={event.NID}>
      <tr style={{ height: betLabeLRowHeight }}>
        <td style={{ width: 400 }}>
          {event.D} {event.DAY} {event.LN}
        </td>
        <td>Yorumlar</td>
        <td></td>
        <BetLabelCell bet={ms1} />
        <BetLabelCell bet={ms0} />
        <td>2</td>
        <BetLabelCell bet={alt} />
        <BetLabelCell bet={ust} />
        <td>H1</td>
        <td>1</td>
        <td>X</td>
        <td>2</td>
        <td>H2</td>
        <BetLabelCell bet={ms10c} />
        <BetLabelCell bet={ms12c} />
        <BetLabelCell bet={ms02c} />
        <td>Var</td>
        <td>Yok</td>
        <td>+99</td>
      </tr>
      <tr style={{ height: betRowHeight }}>
        <td className="bet-name-cell">
          <b>{event.C}</b> {event.T} {event.N}
        </td>
        <td>Yorumlar</td>
        <td>{event.OCG[1].MBS}</td>
        <BetCell bet={ms1} />
        <BetCell bet={ms0} />
        <td></td>
        <BetCell bet={alt} />
        <BetCell bet={ust} />
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <BetCell bet={ms10c} />
        <BetCell bet={ms12c} />
        <BetCell bet={ms02c} />
        <td></td>
        <td></td>
        <td>3</td>
      </tr>
    </Fragment>
  );
};

export default BetRow;
