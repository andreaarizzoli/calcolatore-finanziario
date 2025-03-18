import { Column } from "@ant-design/charts";
import { Card, Empty } from "antd";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useOutputPannel } from "../../hooks.ts";
import { Annotation, DataItem, OutputPannelCenterProps } from "./types";

const OutputPannelCenter: FC<OutputPannelCenterProps> = ({ inputData }) => {
  const {
    vestmentHorizon,
    initialAmount,
    contributionAmount,
    contributionFrequencyType,
    expectedAnnualNetReturn,
    isValidate,
  } = useOutputPannel({ inputData });
  const [data, setData] = useState<DataItem[]>([]);

  const getTableData = useCallback(() => {
    if (
      vestmentHorizon &&
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
            (expectedAnnualNetReturn / 100) +
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
  useEffect(() => {
    getTableData();
  }, [inputData, getTableData]);

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
      annotations,
      scale: { color: { palette: "blues" } },
      animate: { enter: { type: "fadeIn" } },
    }),
    [data, annotations]
  );

  return (
    <Card>
      {isValidate ? <Column {...config} /> : <Empty style={{ height: 430 }} />}
    </Card>
  );
};

export default OutputPannelCenter;
