import { useContext, useMemo } from "react";
import { LabelBoxCard } from "../../../../../../../shared/components";
import { useFormat } from "../../../../../../../shared/utils/hooks";
import { CapitalIncomeContext } from "../../../../provider/CapitalIncomeProvider";

const OutputPannelTop = () => {
  const context = useContext(CapitalIncomeContext);
  const { formatEuro, formatPercent } = useFormat();

  if (!context) {
    throw new Error(
      "OutputPannelTop deve essere usato dentro CapitalIncomeProvider"
    );
  }

  const { targetCapital, inputCapitalIncomeData } = context;
  const { annualExpenses, expectedAnnualNetReturn, isCustom } =
    inputCapitalIncomeData;

  const isValidate = annualExpenses > 0 && expectedAnnualNetReturn > 0;

  const profileType = useMemo(() => {
    if (isCustom) {
      return "Personalizzato";
    } else if (expectedAnnualNetReturn >= 5.5) {
      return "Aggressivo";
    } else if (expectedAnnualNetReturn <= 3) {
      return "Prudente";
    } else {
      return "Moderato";
    }
  }, [expectedAnnualNetReturn]);

  return (
    <LabelBoxCard
      labelList={[
        {
          title: "Capitale necessario",
          value: formatEuro(isValidate ? targetCapital : undefined),
        },
        {
          title: "Spese annuali",
          value: formatEuro(isValidate ? annualExpenses : undefined),
        },
        {
          title: "Rendita netta",
          value: formatPercent(
            isValidate ? expectedAnnualNetReturn : undefined
          ),
        },
        {
          title: "Profilo",
          value: isValidate ? profileType : "-",
        },
      ]}
    />
  );
};

export default OutputPannelTop;
