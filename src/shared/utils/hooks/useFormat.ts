import { useCallback } from "react";

export const useFormat = () => {
  const formatEuro = useCallback(
    (amount: number | string | undefined, decimals: number = 0) => {
      if (amount === undefined) {
        return "-";
      } else {
        return amount.toLocaleString("it-IT", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      }
    },
    []
  );

  const formatPercent = useCallback(
    (amount: number | undefined, decimals: number = 2) => {
      if (amount === undefined) {
        return "-";
      } else {
        const test = (amount / 100).toLocaleString("it-IT", {
          style: "percent",
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        return test;
      }
    },
    []
  );

  const formatYear = useCallback((year: number | string | undefined) => {
    if (year === undefined) {
      return "-";
    } else {
      return `${year} anni`;
    }
  }, []);

  return { formatEuro, formatPercent, formatYear };
};
