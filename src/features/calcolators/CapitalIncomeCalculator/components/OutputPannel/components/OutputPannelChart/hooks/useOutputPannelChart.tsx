import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useMobile } from "../../../../../../../../shared/utils/hooks";
import { CapitalIncomeContext } from "../../../../../provider/CapitalIncomeProvider";
import { TableDataType } from "../types";

const useOutputPannelChart = () => {
  const context = useContext(CapitalIncomeContext);
  const [tableData, setTableData] = useState<TableDataType[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>();
  const { isMobile } = useMobile();

  if (!context) {
    throw new Error(
      "OutputPannelTop deve essere usato dentro CapitalIncomeProvider"
    );
  }

  const { inputCapitalIncomeData } = context;

  const { annualExpenses, expectedAnnualNetReturn, isCustom } =
    inputCapitalIncomeData;

  const isValidate = annualExpenses > 0 && expectedAnnualNetReturn > 0;

  const calculateTargetCapital = useCallback(
    (netReturn: number) => (annualExpenses / netReturn) * 100,
    [annualExpenses]
  );

  const generateData = useMemo(() => {
    const profiles = [
      { name: "aggressive", netAnnualReturns: 0.055 },
      { name: "moderate", netAnnualReturns: 0.04 },
      { name: "conservative", netAnnualReturns: 0.03 },
    ];

    const data = profiles.map(({ name, netAnnualReturns }) => ({
      name,
      targetCapital: calculateTargetCapital(netAnnualReturns * 100),
      netAnnualReturns,
    }));

    if (isCustom) {
      data.push({
        name: "custom",
        targetCapital: calculateTargetCapital(expectedAnnualNetReturn),
        netAnnualReturns: expectedAnnualNetReturn / 100,
      });
    }

    return data;
  }, [calculateTargetCapital, expectedAnnualNetReturn, isCustom]);

  useEffect(() => {
    setTableData(generateData);
    setActiveIndex(
      isCustom
        ? generateData.length - 1
        : ["aggressive", "moderate", "conservative"].indexOf(
            generateData.find(
              (d) => d.netAnnualReturns * 100 === expectedAnnualNetReturn
            )?.name || ""
          )
    );
  }, [generateData]);

  const XAxisTicketFormatter = useCallback(
    (name: string) => {
      const labels: Record<string, string> = {
        conservative: "Prudente (3%)",
        moderate: "Moderato (4%)",
        aggressive: "Aggressivo (5,5%)",
        custom: isMobile ? "Personaliz." : "Personalizzato",
      };
      return labels[name] || "-";
    },
    [isMobile]
  );
  return { isMobile, isValidate, tableData, activeIndex, XAxisTicketFormatter };
};

export default useOutputPannelChart;
