import { Event } from "../types";

const mockEvent: Event = {
  C: "4987",
  N: "AC Milan - Galatasaray",
  NID: "2146486634",
  D: "17.11.2023",
  T: "11:52",
  DAY: "Salı",
  LN: "İspanya La Liga",
  OCG: {
    "1": {
      ID: "1",
      MBS: "4",
      OC: {
        "0": {
          ID: "0",
          O: "5.23",
          N: "1",
          MBS: "4",
        },
        "1": {
          ID: "1",
          O: "2.74",
          N: "X",
          MBS: "4",
        }
      }
    },
    "2": {
      ID: "2",
      MBS: "4",
      OC: {
        "3": {
          ID: "3",
          O: "4.20",
          N: "1-X",
          MBS: "4",
        },
        "4": {
          ID: "4",
          O: "3.73",
          N: "1-2",
          MBS: "4",
        },
        "5": {
          ID: "5",
          O: "2.77",
          N: "X-2",
          MBS: "4",
        }
      }
    },
    "5": {
      ID: "5",
      MBS: "4",
      OC: {
        "25": {
          ID: "25",
          O: "4.35",
          N: "Alt",
          MBS: "4",
        },
        "26": {
          ID: "26",
          O: "2.00",
          N: "Üst",
          MBS: "4",
        }
      }
    }
  }
};
export default mockEvent;
