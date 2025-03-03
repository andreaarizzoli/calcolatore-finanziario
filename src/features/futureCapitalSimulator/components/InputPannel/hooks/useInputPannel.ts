import { useCallback, useState } from "react";
import { FutureCapitalInputDataType } from "../types";
import { initInputdata } from "../utils";

export const useInputPannel = () => {
  const [inputData, setInputData] =
    useState<FutureCapitalInputDataType>(initInputdata);
  const [isCustomVestmentHorizon, setIsCustomVestmentHorizon] = useState(false);
  const [isExpectedAnnualNetReturn, setIsExpectedAnnualNetReturn] =
    useState(false);

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

  return {
    inputData,
    isCustomVestmentHorizon,
    isExpectedAnnualNetReturn,
    handleOnChange,
    setInputData,
    handleVestmentHorizon,
    handleExpectedAnnualNetReturn,
  };
};
