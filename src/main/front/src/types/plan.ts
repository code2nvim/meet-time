export interface Plan {
  id: number;
  title: string;
  meetAt: string;
  meetTime: Date;
  description: string;
}

export interface Participant {
  planId: number;
  participant: string;
}
