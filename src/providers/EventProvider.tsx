import React, { FunctionComponent, PropsWithChildren, useEffect, useState } from "react";
import EventContext from "../contexts/EventContext";
import { Event } from "../types";

const EventProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetch("https://nesine-case-study.onrender.com/bets", {
          signal: controller.signal
        });
        const events = await result.json();

        setEvents(events);
        setIsLoading(false);
      } catch (e) {
        // If error is thrown by abortion we don't want to update state in order to prevent memory leaks
        if (e instanceof Error && e?.name === "AbortError") return;

        setIsLoading(false);
        setError("Unable to fetch events");
      }
    };

    fetchEvents();

    return () => controller.abort();
  }, []);

  const contextValue = { events, isLoading, error };

  return <EventContext.Provider value={contextValue}>{children}</EventContext.Provider>;
};

export default EventProvider;
