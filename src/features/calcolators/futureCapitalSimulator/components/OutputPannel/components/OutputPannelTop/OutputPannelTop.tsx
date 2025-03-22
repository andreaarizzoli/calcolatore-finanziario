import { FC } from "react";
import { LabelBoxCard } from "../../../../../../../shared/components";
import { useFormat } from "../../../../../../../shared/utils/hooks";
import { FutureCapitalInputDataType } from "../../../InputPannel/types";
import { useOutputPannel } from "../../hooks.ts";

export type OutputPannelTopProps = {
  inputData?: FutureCapitalInputDataType;
};

const OutputPannelTop: FC<OutputPannelTopProps> = ({ inputData }) => {
  const { formatEuro, formatPercent, formatYear } = useFormat();
  const {
    totalInvested,
    accruedInterest,
    endCapital,
    accruedInterestPerc,
    isValidate,
    initialAmount,
    totalContributions,
    vestmentHorizon,
    expectedAnnualNetReturn,
  } = useOutputPannel({
    inputData,
  });

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
