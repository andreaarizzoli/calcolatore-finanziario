import { SizeType } from "antd/es/config-provider/SizeContext";
import { useCallback, useContext, useMemo, useState } from "react";
import { useMobile } from "../../../../../../shared/utils/hooks";
import { CapitalIncomeContext } from "../../../provider/CapitalIncomeProvider";

const useCapitalIncomeInputPannel = () => {
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

  const context = useContext(CapitalIncomeContext);

  if (!context) {
    throw new Error(
      "CapitalIncomeInput deve essere usato dentro CapitalIncomeProvider"
    );
  }

  const { inputCapitalIncomeData, setInputCapitalIncomeData } = context;

  const handleCapitalIncomeOnChange = useCallback(
    (name: string, newValue: number | string | undefined | boolean) => {
      setInputCapitalIncomeData({
        ...inputCapitalIncomeData,
        [name]: newValue,
        isCustom: isCustomExpectedAnnualNetReturn,
      });
    },
    [
      setInputCapitalIncomeData,
      inputCapitalIncomeData,
      isCustomExpectedAnnualNetReturn,
    ]
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
