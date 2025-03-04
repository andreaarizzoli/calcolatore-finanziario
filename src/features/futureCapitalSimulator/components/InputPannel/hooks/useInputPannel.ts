import { useCallback, useMemo, useState } from "react";
import { FutureCapitalInputDataType } from "../types";
import { initInputdata } from "../utils";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { useMobile } from "../../../../../shared/utils/hooks";

export const useInputPannel = () => {
  const [inputData, setInputData] =
    useState<FutureCapitalInputDataType>(initInputdata);
  const [isCustomVestmentHorizon, setIsCustomVestmentHorizon] = useState(false);
  const [isExpectedAnnualNetReturn, setIsExpectedAnnualNetReturn] =
    useState(false);

  const { isMobile, isTablet, isDesktop, isDesktopMedium, isDesktopLarge } =
    useMobile();
  const handleOnChange = useCallback(
    (name: string, newValue: number | string | undefined) => {
      setInputData({ ...inputData, [name]: newValue });
    },
    [setInputData, inputData]
  );

  const handleVestmentHorizon = useCallback(
    (isCustom: boolean, value: number | undefined) => {
      setIsCustomVestmentHorizon(isCustom);
      handleOnChange("vestmentHorizon", value);
    },
    [handleOnChange, setIsCustomVestmentHorizon]
  );

  const handleExpectedAnnualNetReturn = useCallback(
    (isCustom: boolean, value: number | undefined) => {
      setIsExpectedAnnualNetReturn(isCustom);
      handleOnChange("expectedAnnualNetReturn", value);
    },
    [handleOnChange, setIsExpectedAnnualNetReturn]
  );

  const inputSize = useMemo<SizeType>(() => {
    if (isMobile || isTablet) {
      return "small";
    } else if (isDesktop || isDesktopMedium || isDesktopLarge) {
      return "middle";
    } else {
      return "middle";
    }
  }, [isMobile, isTablet, isDesktop, isDesktopMedium, isDesktopLarge]);

  return {
    inputData,
    isCustomVestmentHorizon,
    isExpectedAnnualNetReturn,
    inputSize,
    handleOnChange,
    setInputData,
    handleVestmentHorizon,
    handleExpectedAnnualNetReturn,
  };
};
