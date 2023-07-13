import { createContext } from "react";
import { Event } from "../types";

type EventContextValue = { events: Event[]; isLoading: boolean; error: string | null };

const EventContext = createContext<EventContextValue | null>(null);

export default EventContext;
