import {
  CapitalIncomeDataType,
  CapitalIncomeInputDataType,
  CapitalIncomeOutputDataType,
} from "./types";

export const defaultInputCapitalIncomeData: CapitalIncomeInputDataType = {
  annualExpenses: 30000,
  expectedAnnualNetReturn: 3,
  isCustom: false,
};

export const defaultOutputCapitalIncomeData: CapitalIncomeOutputDataType = {
  conservative: 1000000,
  moderate: 750000,
  aggressive: 545454.5454545454,
  custom: undefined,
};

export const defaultCapitalIncomeData: CapitalIncomeDataType = {
  capitalIncomeInput: defaultInputCapitalIncomeData,
  capitalIncomeOutput: defaultOutputCapitalIncomeData,
};
