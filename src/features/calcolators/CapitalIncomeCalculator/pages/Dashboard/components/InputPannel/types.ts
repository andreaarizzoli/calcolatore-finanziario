export type CapitalIncomeProfileType = {
  profile: "conservative" | "moderate" | "aggressive" | "custom";
};
export type CapitalIncomeOutputDataType = {
  targetCapital: number;
  netAnnualReturn: number;
  expectedAnnualNetReturn: number;
};

export type CapitalIncomeInputDataType = {
  annualExpenses: number;
  expectedAnnualNetReturn: number;
};
