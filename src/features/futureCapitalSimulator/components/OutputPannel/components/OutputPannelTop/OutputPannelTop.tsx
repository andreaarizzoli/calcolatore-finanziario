import { Card } from "antd";
import { FC } from "react";
import { LabelBoxCard } from "../../../../../../shared/components";
import { useFormat } from "../../../../../../shared/utils/hooks";
import { FutureCapitalInputDataType } from "../../../InputPannel/types";
import { useOutputPannel } from "../../hooks.ts";

export type OutputPannelTopProps = {
  inputData?: FutureCapitalInputDataType;
};

const OutputPannelTop: FC<OutputPannelTopProps> = ({ inputData }) => {
  const { formatEuro, formatPercent } = useFormat();
  const {
    totalInvested,
    accruedInterest,
    endCapital,
    accruedInterestPerc,
    isValidate,
  } = useOutputPannel({
    inputData,
  });

  return (
    <LabelBoxCard
      labelList={[
        {
          title: "Capitale Investito",
          value: isValidate ? formatEuro(totalInvested) : "-",
        },
        {
          title: "Capitale Finale",
          value: isValidate ? formatEuro(endCapital) : "-",
        },
        {
          title: "Rendimento Lordo",
          value: isValidate ? formatEuro(accruedInterest) : "-",
        },
        {
          title: "Rendimento Lordo %",
          value: isValidate ? formatPercent(accruedInterestPerc) : "-",
        },
      ]}
    />
  );
};

export default OutputPannelTop;
