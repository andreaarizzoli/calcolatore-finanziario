import { Column } from "@ant-design/charts";
import { Card } from "antd";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { FutureCapitalInputDataType } from "../../../InputPannel/types";
import { useOutputPannel } from "../../hooks.ts";

interface DataItem {
  year: string;
  value: number;
  type: string;
}

interface Annotation {
  type: string;
  data: [string, number];
  style: {
    textAlign: string;
    fontSize: number;
    fill: string;
  };
  xField: string;
  yField: string;
  tooltip: boolean;
}

export type OutputPannelCenterProps = {
  inputData?: FutureCapitalInputDataType;
};

const OutputPannelCenter: FC<OutputPannelCenterProps> = ({ inputData }) => {
  const {
    vestmentHorizon,
    initialAmount,
    contributionAmount,
    contributionFrequencyType,
    expectedAnnualNetReturn,
  } = useOutputPannel({ inputData });
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    getTableData();
  }, [
    vestmentHorizon,
    initialAmount,
    contributionAmount,
    contributionFrequencyType,
    expectedAnnualNetReturn,
  ]);

  const getTableData = useCallback(() => {
    if (
      vestmentHorizon &&
      initialAmount &&
      contributionAmount &&
      contributionFrequencyType &&
      expectedAnnualNetReturn
    ) {
      let partialContributionCurrentYear = 0; //versamento annuo
      let partialContribuitionLastYear = 0; //versamento anno precedente
      let partialInterestCurrentYear = 0; //Interesse maturato (calcolo su capitale iniziale + versamento anno precedente)
      let partialInterestLastYear = 0; //Interesse anno precedente
      let partialCapitalCurrentYear = initialAmount; //Capitale anno in corso

      const tableData = Array.from({ length: vestmentHorizon }, (_, index) => {
        // Aggiornamento del capitale con il versamento
        partialCapitalCurrentYear += partialContributionCurrentYear;

        // Aggiornamento dei versamenti per l'anno corrente
        partialContributionCurrentYear +=
          contributionAmount *
          (contributionFrequencyType === "monthly" ? 12 : 1);

        // Calcolo degli interessi ((capitale iniziale + versamento anno precedente + interesse anno precedente)*0,08) + interesse anno precedente
        partialInterestCurrentYear =
          (initialAmount +
            partialContribuitionLastYear +
            partialInterestLastYear) *
            0.08 +
          partialInterestLastYear;
        partialInterestLastYear = partialInterestCurrentYear;
        partialContribuitionLastYear = partialContributionCurrentYear;

        const rowData = [
          {
            year: `${index + 1}`,
            value: initialAmount,
            type: "Capitale iniziale",
          },
          {
            year: `${index + 1}`,
            value: partialContributionCurrentYear,
            type: "Versamenti",
          },
          {
            year: `${index + 1}`,
            value: Math.round(partialInterestCurrentYear),
            type: "Interessi",
          },
        ];
        return rowData;
      }).flat();
      setData(tableData);
    }
  }, [
    vestmentHorizon,
    initialAmount,
    contributionAmount,
    contributionFrequencyType,
    expectedAnnualNetReturn,
  ]);

  const groupedData = useMemo(() => {
    return data.reduce<{ [key: string]: DataItem[] }>((acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [];
      }
      acc[item.year].push(item);
      return acc;
    }, {});
  }, [data]);

  const annotations = useMemo(() => {
    const result: Annotation[] = [];
    for (const year in groupedData) {
      const values = groupedData[year];
      const totalValue = values.reduce((sum, item) => sum + item.value, 0);
      result.push({
        type: "text",
        data: [year, totalValue],
        style: {
          textAlign: "center",
          fontSize: 14,
          fill: "rgba(1, 0, 0, 0.85)",
        },
        xField: "year",
        yField: "value",
        tooltip: false,
      });
    }
    return result;
  }, [groupedData]);

  const config = useMemo(
    () => ({
      data,
      xField: "year",
      yField: "value",
      height: 430,
      stack: true,
      colorField: "type",
      // label: {
      //   text: "value",
      //   textBaseline: "bottom",
      //   position: "inside",
      // },

      tooltip: { items: [{ "capitale iniziale": "y" }, { channel: "x" }] },
      annotations,
      scale: { color: { palette: "blues" } },
      animate: { enter: { type: "fadeIn" } },
    }),
    [data, annotations]
  );

  return (
    <Card>
      <Column {...config} />;
    </Card>
  );
};

export default OutputPannelCenter;
