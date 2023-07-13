export interface Bet {
  NID: string;
  D: string;
  LN: string;
  DAY: string;
  C: string;
  T: string;
  N: string;
  OCG: {
    [key in string]: {
      MBS: string;
      ID: string;
      OC: {
        [key in string]: {
          ID: string;
          O: string;
          N: string;
        };
      };
    };
  };
}
