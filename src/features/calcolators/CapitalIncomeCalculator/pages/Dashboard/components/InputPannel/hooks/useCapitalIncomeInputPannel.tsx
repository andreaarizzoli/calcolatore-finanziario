import { SizeType } from "antd/es/config-provider/SizeContext";
import React, { useCallback, useMemo, useState } from "react";
import { useMobile } from "../../../../../../../../shared/utils/hooks";
import { CapitalIncomeInputDataType } from "../types";
import { defaultInputCapitalIncomeData } from "../utils";

const useCapitalIncomeInputPannel = () => {
  const [inputCapitalIncomeData, setInputCapitalIncomeData] =
    useState<CapitalIncomeInputDataType>(defaultInputCapitalIncomeData);
  const [isCustomExpectedAnnualNetReturn, setIsCustomExpectedAnnualNetReturn] =
    useState<boolean>(false);
  const { isMobile, isTablet, isDesktop, isDesktopMedium, isDesktopLarge } =
    useMobile();
  const inputSize = useMemo<SizeType>(() => {
    if (isMobile || isTablet) {
      return "small";
    } else if (isDesktop || isDesktopMedium || isDesktopLarge) {
      return "middle";
    } else {
      return "middle";
    }
  }, [isMobile, isTablet, isDesktop, isDesktopMedium, isDesktopLarge]);

  const handleCapitalIncomeOnChange = useCallback(
    (name: string, newValue: number | string | undefined) => {
      setInputCapitalIncomeData({
        ...inputCapitalIncomeData,
        [name]: newValue,
      });
    },
    [setInputCapitalIncomeData, inputCapitalIncomeData]
  );

  const handleExpectedAnnualNetReturn = useCallback(
    (isCustom: boolean, value: number | undefined) => {
      setIsCustomExpectedAnnualNetReturn(isCustom);
      handleCapitalIncomeOnChange("expectedAnnualNetReturn", value);
    },
    [handleCapitalIncomeOnChange, setIsCustomExpectedAnnualNetReturn]
  );
  return {
    inputCapitalIncomeData,
    isCustomExpectedAnnualNetReturn,
    inputSize,
    handleExpectedAnnualNetReturn,
    handleCapitalIncomeOnChange,
  };
};

export default useCapitalIncomeInputPannel;
