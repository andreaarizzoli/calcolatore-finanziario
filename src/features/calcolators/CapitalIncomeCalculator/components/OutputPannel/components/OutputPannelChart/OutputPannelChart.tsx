import { Card, Empty } from "antd";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useFormat, useMobile } from "../../../../../../../shared/utils/hooks";
import { CapitalIncomeContext } from "../../../../provider/CapitalIncomeProvider";
import { TableDataType } from "./types";

const OutputPannelChart = () => {
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

  const { formatEuroChart } = useFormat();

  const XAxisTicketFormatter = useCallback((name: string) => {
    const labels: Record<string, string> = {
      conservative: "Prudente (3%)",
      moderate: "Moderato (4%)",
      aggressive: "Aggressivo (5,5%)",
      custom: isMobile ? "Custom" : "Personalizzato",
    };
    return labels[name] || "-";
  }, []);

  return (
    <Card>
      <div style={{ height: "250px" }}>
        {isValidate ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={tableData}
              margin={{
                top: 20,
                right: isMobile ? 40 : 80,
                left: isMobile ? 20 : 60,
                bottom: 5,
              }}
              layout="vertical"
              width={500}
              height={300}
            >
              <XAxis
                type="number"
                padding={{
                  left: 1,
                  right: 5,
                }}
                tickFormatter={formatEuroChart}
              />
              <YAxis
                dataKey="name"
                type="category"
                tickFormatter={XAxisTicketFormatter}
              />
              <Bar
                dataKey="targetCapital"
                stackId="conservative"
                label={{ position: "right" }}
              >
                {tableData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === activeIndex ? "#182eff" : "#f0f0f0"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <Empty />
        )}
      </div>
    </Card>
  );
};

export default OutputPannelChart;
