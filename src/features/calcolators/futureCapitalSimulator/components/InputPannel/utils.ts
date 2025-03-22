import { FutureCapitalInputDataType } from "./types";

export const initInputdata = {
  initialAmount: 10000,
  contributionFrequencyType: "monthly",
  contributionAmount: 100,
  vestmentHorizon: 10,
  expectedAnnualNetReturn: 8,
} as FutureCapitalInputDataType;

export const contributionFrequencyTypeOptions = [
  { label: "Mensili", value: "monthly" },
  { label: "Annuale", value: "yearly" },
];

export const vestmentHorizonOptions = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "15", value: 15 },
  { label: "20", value: 20 },
  { label: "30", value: 30 },
];
