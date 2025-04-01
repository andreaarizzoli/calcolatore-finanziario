export type CapitalIncomeOutputDataType = {
  targetCapital: number;
  netAnnualReturn: number;
  expectedAnnualNetReturn: number;
};

export type CapitalIncomeInputDataType = {
  annualExpenses: number;
  expectedAnnualNetReturn: number;
  isCustom: boolean;
};

export type CapitalIncomeDataType = {
  capitalIncomeInput: CapitalIncomeInputDataType;
  capitalIncomeOutput: CapitalIncomeOutputDataType;
};
