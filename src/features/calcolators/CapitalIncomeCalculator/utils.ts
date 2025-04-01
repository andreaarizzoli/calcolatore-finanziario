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
  targetCapital: 1000000,
  netAnnualReturn: 30000,
  expectedAnnualNetReturn: 3,
};

export const defaultCapitalIncomeData: CapitalIncomeDataType = {
  capitalIncomeInput: defaultInputCapitalIncomeData,
  capitalIncomeOutput: defaultOutputCapitalIncomeData,
};
