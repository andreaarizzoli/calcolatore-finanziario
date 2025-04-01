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

  const value = useMemo(
    () => ({
      inputCapitalIncomeData,
      setInputCapitalIncomeData,
    }),
    [inputCapitalIncomeData]
  );

  return (
    <CapitalIncomeContext.Provider value={value}>
      {children}
    </CapitalIncomeContext.Provider>
  );
};

export default CapitalIncomeProvider;
