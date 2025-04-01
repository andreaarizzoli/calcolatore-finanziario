import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { CapitalIncomeInputDataType } from "../types";
import { defaultInputCapitalIncomeData } from "../utils";

interface CapitalIncomeContextType {
  inputCapitalIncomeData: CapitalIncomeInputDataType;
  targetCapital: number | undefined;
  setInputCapitalIncomeData: Dispatch<
    SetStateAction<CapitalIncomeInputDataType>
  >;
}

export const CapitalIncomeContext = createContext<
  CapitalIncomeContextType | undefined
>(undefined);

const CapitalIncomeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [inputCapitalIncomeData, setInputCapitalIncomeData] =
    useState<CapitalIncomeInputDataType>(defaultInputCapitalIncomeData);

  const targetCapital = useMemo(() => {
    if (inputCapitalIncomeData.expectedAnnualNetReturn > 0) {
      const capital =
        (inputCapitalIncomeData.annualExpenses /
          inputCapitalIncomeData.expectedAnnualNetReturn) *
        100;
      return capital;
    } else {
      return undefined;
    }
  }, [inputCapitalIncomeData]);

  const value = useMemo(
    () => ({
      inputCapitalIncomeData,
      targetCapital,
      setInputCapitalIncomeData,
    }),
    [inputCapitalIncomeData, targetCapital]
  );

  return (
    <CapitalIncomeContext.Provider value={value}>
      {children}
    </CapitalIncomeContext.Provider>
  );
};

export default CapitalIncomeProvider;
