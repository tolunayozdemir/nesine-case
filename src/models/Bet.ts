import { Event, OC, OCG } from "../types";

export default class Bet {
  private event: Event;
  private OCG: OCG;
  private OC: OC;
  constructor(event: Event, OCG_ID: string, OC_ID: string) {
    this.event = event;
    this.OCG = event.OCG[OCG_ID];
    this.OC = this.OCG.OC[OC_ID];
  }

  get id() {
    const { event, OCG, OC } = this;

    return `${event.NID}-${OCG.ID}-${OC.ID}`;
  }

  get eventId() {
    const { event } = this;

    return event.NID;
  }

  get eventName() {
    const { event } = this;

    return event.N;
  }

  get name() {
    const { OC } = this;
    return OC.N;
  }

  get odd() {
    const { OC } = this;
    return OC.O;
  }

  get mbs() {
    const { OC } = this;
    return OC.MBS;
  }

  get code() {
    const { event } = this;
    return event.C;
  }
}
