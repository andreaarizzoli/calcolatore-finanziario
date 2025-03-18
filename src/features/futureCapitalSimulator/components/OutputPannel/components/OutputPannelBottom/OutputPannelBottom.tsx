import { Card } from "antd";
import { FC } from "react";
import { LabelBoxCard } from "../../../../../../shared/components";
import { useFormat } from "../../../../../../shared/utils/hooks";
import { useOutputPannel } from "../../hooks.ts";
import { OutputPannelBottomProps } from "./types";

const OutputPannelBottom: FC<OutputPannelBottomProps> = ({ inputData }) => {
  const { formatEuro, formatYear, formatPercent } = useFormat();
  const {
    expectedAnnualNetReturn,
    initialAmount,
    totalContributions,
    vestmentHorizon,
    isValidate,
  } = useOutputPannel({ inputData });

  return (
    <LabelBoxCard
      labelList={[
        {
          title: "Capitale Iniziale",
          value: isValidate ? formatEuro(initialAmount) : "-",
        },
        {
          title: "Versamenti aggiuntivi",
          value: isValidate ? formatEuro(totalContributions) : "-",
        },
        {
          title: "Orizzonte",
          value: isValidate ? formatYear(vestmentHorizon) : "-",
        },
        {
          title: "Rendimento Annuo atteso",
          value: isValidate ? formatPercent(expectedAnnualNetReturn) : "-",
        },
      ]}
    />
  );
};

export default OutputPannelBottom;
