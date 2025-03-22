export type FutureCapitalInputDataType = {
  initialAmount?: number;
  contributionAmount?: number;
  contributionFrequencyType: "monthly" | "yearly";
  vestmentHorizon?: number;
  expectedAnnualNetReturn?: number;
};

export type ChartDataType = {
  startingCapital: number;
  capitalContributions: number;
  accruedInterest: number;
  years: number;
};

export type InputPannelType = {
  onSendData: (data: FutureCapitalInputDataType) => void;
};

//TODO: Eliminare e salvare da qualche parte
export type OutputDataType = {
  totalInvested: number; // Capitale Investito
  accruedInterest: number; // Interessi Accruati
  accruedInterest_perc: number; // Interessi Accruati %
  endCapital: number; // Capitale Finale
};

export type OutputPannelDataType = {
  startCapital: number; // Capitale Iniziale
  totalContributions: number; // Versamenti aggiuntivi
  yearsInvested: number; // Orizzonte
  expectedAnnual_net_return: number; // Rendimento Annuo atteso
};
