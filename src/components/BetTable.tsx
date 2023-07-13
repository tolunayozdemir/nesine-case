import React, { FC, Fragment } from "react";
import useEvents from "../hooks/useEvents";
import useCoupon from "../hooks/useCoupon";
import { classnames } from "../utils";
import Bet from "../models/Bet";
import Loading from "./Loading";
import Error from "./Error";

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

const BetLabelCell: FC<{ bet: Bet }> = (props) => {
  const { bet } = props;
  return <td>{bet.name}</td>;
};

const BetTable = () => {
  const { events, isLoading, error } = useEvents();

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <table className="bet-table">
      <thead>
        <tr>
          <th>Event Count: {events.length}</th>
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
      <tbody>
        {events.map((event) => {
          const ms1 = new Bet(event, "1", "0");
          const ms0 = new Bet(event, "1", "1");
          const alt = new Bet(event, "5", "25");
          const ust = new Bet(event, "5", "26");
          const ms10c = new Bet(event, "2", "3");
          const ms12c = new Bet(event, "2", "4");
          const ms02c = new Bet(event, "2", "5");

          return (
            <Fragment key={event.NID}>
              <tr>
                <td>
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
              <tr>
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
        })}
      </tbody>
    </table>
  );
};

export default BetTable;
