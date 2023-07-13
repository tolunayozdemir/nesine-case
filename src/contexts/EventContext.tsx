import { createContext } from "react";
import { Event } from "../types";

type EventContextValue = Event[];

const EventContext = createContext<EventContextValue | null>(null);

export default EventContext;
