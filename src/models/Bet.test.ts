import Bet from "./Bet";
import mockEvent from "../test-utils/mock-event";

describe("Bet class", () => {
  it("should create an bet ID", () => {
    const NID = "A";
    mockEvent.NID = NID;

    const bet = new Bet(mockEvent, "1", "1");

    expect(bet.id).toBe("A-1-1");
  });

  it("should return correct event ID", () => {
    const NID = "A";
    mockEvent.NID = NID;

    const bet = new Bet(mockEvent, "1", "1");

    expect(bet.eventId).toBe(NID);
  });

  it("should return correct event ID", () => {
    const eventName = "Arsenal - Barcelona";
    mockEvent.N = eventName;

    const bet = new Bet(mockEvent, "1", "1");

    expect(bet.eventName).toBe(eventName);
  });


  it("should return correct name", () => {
    const betName = "X";
    mockEvent.OCG[1].OC[1].N = betName;

    const bet = new Bet(mockEvent, "1", "1");

    expect(bet.name).toBe(betName);
  });

  it("should return correct odd", () => {
    const betOdd = "5.2";
    mockEvent.OCG[1].OC[1].O = betOdd;

    const bet = new Bet(mockEvent, "1", "1");

    expect(bet.odd).toBe(betOdd);
  });

  it("should return correct mbs", () => {
    const mbs = "3";
    mockEvent.OCG[1].OC[1].MBS = mbs;

    const bet = new Bet(mockEvent, "1", "1");

    expect(bet.mbs).toBe(mbs);
  });

  it("should return correct code", () => {
    const code = "3";
    mockEvent.C = code;

    const bet = new Bet(mockEvent, "1", "1");

    expect(bet.code).toBe(code);
  });
});
