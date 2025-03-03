import React, { useMemo } from "react";
import { FutureCapitalInputDataType } from "../../InputPannel/types";

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

  const yearlyContribution = useMemo(() => {
    return contributionFrequencyType === "monthly"
      ? contributionAmount * 12
      : contributionAmount;
  }, [contributionAmount, contributionFrequencyType]);

  const totalContributions = useMemo(() => {
    return contributionAmount && vestmentHorizon
      ? yearlyContribution * vestmentHorizon
      : "-";
  }, [yearlyContribution, vestmentHorizon]);

  const totalInvested = useMemo(() => {
    return typeof totalContributions === "number"
      ? initialAmount + totalContributions
      : "-";
  }, [totalContributions, initialAmount]);

  const endCapital = useMemo(() => {
    if (
      initialAmount &&
      expectedAnnualNetReturn &&
      vestmentHorizon &&
      contributionAmount
    ) {
      const annualRate = expectedAnnualNetReturn / 100;
      const capitalIniziale =
        initialAmount * Math.pow(1 + annualRate, vestmentHorizon);
      const versamentiMensili =
        yearlyContribution *
        ((Math.pow(1 + annualRate, vestmentHorizon) - 1) / annualRate);
      return capitalIniziale + versamentiMensili;
    }
    return "-";
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
  };
};
