import React from "react";
import useEvents from "../../hooks/useEvents";
import Loading from "../Loading";
import Error from "../Error";
import { rowConfig } from "./config";
import BetRow from "./BetRow";
import BetTableHeader from "./BetTableHeader";
import useLazyRender from "../../hooks/useLazyRender";

const { betLabeLRowHeight, betRowHeight } = rowConfig;
const rowHeight = betLabeLRowHeight + betRowHeight;

const BetTable = () => {
  const { events, isLoading, error } = useEvents();
  const { startIndex, endIndex } = useLazyRender(events, rowHeight);

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  const rows = [];
  rows.push(<tr key="startRow" style={{ height: startIndex * rowHeight }}></tr>);

  for (let i = startIndex; i < endIndex; ++i) {
    const event = events[i];
    rows.push(<BetRow event={event} key={event.NID} />);
  }

  rows.push(<tr key="endRow" style={{ height: (events.length - endIndex) * rowHeight }}></tr>);

  return (
    <table className="bet-table">
      <BetTableHeader eventCount={events.length} />
      <tbody>{rows}</tbody>
    </table>
  );
};

export default BetTable;
