import { render, screen } from "@testing-library/react";
import React from "react";
import useEvents from "./useEvents";
import EventContext from "../contexts/EventContext";
import mockEvent from "../test-utils/mock-event";

describe("useEvent hook", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("throws error when not used in scope of context", () => {
    const TestComponent = () => {
      useEvents();
      return null;
    };

    expect(() => render(<TestComponent />)).toThrow(
      "useEvents must be used within a EventProvider"
    );
  });

  it("return event context value", () => {
    const mockEventName = "Galatasaray - Beşiktaş";
    const mockContextValue = {
      events: [{ ...mockEvent, N: mockEventName }],
      isLoading: false,
      error: null
    };
    const TestComponent = () => {
      const events = useEvents();

      return <p>{JSON.stringify(events)}</p>;
    };

    render(
      <EventContext.Provider value={mockContextValue}>
        <TestComponent />
      </EventContext.Provider>
    );
    const textValue = JSON.stringify(mockContextValue);
    const { textContent } = screen.getByText(textValue);

    expect(textContent).toBe(textValue);
  });
});
