export type CapitalIncomeInputDataType = {
  annualExpenses: number;
  expectedAnnualNetReturn: number;
  isCustom: boolean;
};

export type CapitalIncomeOutputDataType = {
  conservative: number;
  moderate: number;
  aggressive: number;
  custom: number | undefined;
};

export type CapitalIncomeDataType = {
  capitalIncomeInput: CapitalIncomeInputDataType;
  capitalIncomeOutput: CapitalIncomeOutputDataType;
};
