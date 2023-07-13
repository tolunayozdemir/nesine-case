import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import EventContext from "../contexts/EventContext";
import { Event } from "../types";

const EventProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    const result = await fetch("https://nesine-case-study.onrender.com/bets");
    const events = await result.json();

    setEvents(events);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return <EventContext.Provider value={events}>{children}</EventContext.Provider>;
};

export default EventProvider;
