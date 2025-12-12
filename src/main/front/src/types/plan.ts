export interface Plan {
  planId: number;
  title: string;
  meetAt: string;
  meetTime: Date;
  desription: string;
}

export interface Participant {
  planId: number;
  participant: string;
}
