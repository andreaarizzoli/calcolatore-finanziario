import { useCallback, useMemo } from "react";
import { FutureCapitalInputDataType } from "../../InputPannel/types";
import { DataItemChart } from "../components/OutputPannelCenter/types";

export type useOutputPannelProps = {
  inputData?: FutureCapitalInputDataType;
};

export const useOutputPannel = ({ inputData }: useOutputPannelProps) => {
  const {
    initialAmount = 0,
    contributionAmount = 0,
    contributionFrequencyType = "monthly",
    vestmentHorizon = 0,
    expectedAnnualNetReturn = 0,
  } = inputData || {};

  const isValidate = useMemo(() => {
    return (
      !!contributionAmount &&
      !!contributionFrequencyType &&
      !!vestmentHorizon &&
      !!expectedAnnualNetReturn &&
      initialAmount >= 0
    );
  }, [
    initialAmount,
    contributionAmount,
    contributionFrequencyType,
    vestmentHorizon,
    expectedAnnualNetReturn,
  ]);

  const yearlyContribution = useMemo(() => {
    return contributionFrequencyType === "monthly"
      ? contributionAmount * 12
      : contributionAmount;
  }, [contributionAmount, contributionFrequencyType]);

  const totalContributions = useMemo(() => {
    return contributionAmount && vestmentHorizon
      ? yearlyContribution * vestmentHorizon
      : "-";
  }, [yearlyContribution, vestmentHorizon, contributionAmount]);

  const totalInvested = useMemo(() => {
    return typeof totalContributions === "number"
      ? initialAmount + totalContributions
      : "-";
  }, [totalContributions, initialAmount]);

  const endCapital = useMemo(() => {
    const annualRate = expectedAnnualNetReturn / 100;
    const capitalIniziale =
      initialAmount * Math.pow(1 + annualRate, vestmentHorizon);
    const versamentiMensili =
      yearlyContribution *
      ((Math.pow(1 + annualRate, vestmentHorizon) - 1) / annualRate);
    return capitalIniziale + versamentiMensili;
  }, [
    initialAmount,
    expectedAnnualNetReturn,
    vestmentHorizon,
    yearlyContribution,
  ]);

  const accruedInterest = useMemo(() => {
    return typeof endCapital === "number" && typeof totalInvested === "number"
      ? endCapital - totalInvested
      : "-";
  }, [endCapital, totalInvested]);

  const accruedInterestPerc = useMemo(() => {
    return typeof accruedInterest === "number" &&
      typeof totalInvested === "number"
      ? (accruedInterest / totalInvested) * 100
      : undefined;
  }, [accruedInterest, totalInvested]);

  const calculateDataChart = useCallback(() => {
    if (
      !vestmentHorizon ||
      !contributionAmount ||
      !contributionFrequencyType ||
      !expectedAnnualNetReturn
    ) {
      return [];
    }

    let partialContributionCurrentYear = 0;
    let partialContribuitionLastYear = 0;
    let partialInterestCurrentYear = 0;
    let partialInterestLastYear = 0;
    let partialCapitalCurrentYear = initialAmount;

    const tableData: DataItemChart[] = [];

    for (let year = 1; year <= vestmentHorizon; year++) {
      // Aggiornamento del capitale con il versamento
      partialCapitalCurrentYear += partialContributionCurrentYear;

      // Aggiornamento dei versamenti per l'anno corrente
      partialContributionCurrentYear +=
        contributionAmount * (contributionFrequencyType === "monthly" ? 12 : 1);

      // Calcolo degli interessi
      partialInterestCurrentYear =
        (initialAmount +
          partialContribuitionLastYear +
          partialInterestLastYear) *
          (expectedAnnualNetReturn / 100) +
        partialInterestLastYear;
      partialInterestLastYear = partialInterestCurrentYear;
      partialContribuitionLastYear = partialContributionCurrentYear;

      tableData.push({
        year,
        startingCapital: initialAmount,
        capitalContributions: partialContributionCurrentYear,
        accruedIinterest: Math.round(partialInterestCurrentYear),
      });
    }

    return tableData;
  }, [
    vestmentHorizon,
    initialAmount,
    contributionAmount,
    contributionFrequencyType,
    expectedAnnualNetReturn,
  ]);

  return {
    initialAmount,
    contributionAmount,
    contributionFrequencyType,
    vestmentHorizon,
    expectedAnnualNetReturn,
    totalContributions,
    totalInvested,
    accruedInterest,
    endCapital,
    accruedInterestPerc,
    isValidate,
    calculateDataChart,
  };
};
