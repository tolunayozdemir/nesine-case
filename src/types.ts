export interface OC {
  ID: string;
  O: string;
  N: string;
  MBS: string;
}

export interface OCG {
  MBS: string;
  ID: string;
  OC: {
    [key in string]: OC;
  };
}

export interface Event {
  NID: string;
  D: string;
  LN: string;
  DAY: string;
  C: string;
  T: string;
  N: string;
  OCG: {
    [key in string]: OCG;
  };
}
