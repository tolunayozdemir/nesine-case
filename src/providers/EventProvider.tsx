import React, { FunctionComponent, PropsWithChildren, useEffect, useState } from "react";
import EventContext from "../contexts/EventContext";
import { Event } from "../types";

const EventProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchEvents = async () => {
      const result = await fetch("https://nesine-case-study.onrender.com/bets", {
        signal: controller.signal
      });
      const events = await result.json();

      setEvents(events);
    };

    fetchEvents();

    return () => controller.abort();
  }, []);

  return <EventContext.Provider value={events}>{children}</EventContext.Provider>;
};

export default EventProvider;
