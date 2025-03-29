import React from "react";
import { LabelBoxCard } from "../../../../../../../../../shared/components";

const OutputPannelTop = () => {
  return (
    <LabelBoxCard
      labelList={[
        {
          title: "Capitale necessario",
          value: "1.000.000 €",
        },
        {
          title: "Spese annuali",
          value: "30.000 €",
        },
        {
          title: "Rendita netta",
          value: "3%",
        },
        {
          title: "Profilo",
          value: "Prudente",
        },
      ]}
    />
  );
};

export default OutputPannelTop;
