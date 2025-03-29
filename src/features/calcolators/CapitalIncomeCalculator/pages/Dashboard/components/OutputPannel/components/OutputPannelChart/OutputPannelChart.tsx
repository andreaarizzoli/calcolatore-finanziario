import { Card } from "antd";
import { useCallback, useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useFormat } from "../../../../../../../../../shared/utils/hooks";

//   "conservative": {
//       "target_capital": 1000000,
//       "net_annual_returns": 0.03
//   },
//   "moderate": {
//       "target_capital": 750000,
//       "net_annual_returns": 0.04
//   },
//   "aggressive": {
//       "target_capital": 545454.5454545454,
//       "net_annual_returns": 0.055
//   },
//   "custom": {
//       "target_capital": 300000,
//       "net_annual_returns": 0.1
//   }

const OutputPannelChart = () => {
  const data = [
    {
      name: "aggressive",
      targetCapital: 545454.5454545454,
      NetAnnualReturns: 0.055,
    },
    {
      name: "moderate",
      targetCapital: 750000,
      netAnnualReturns: 0.04,
    },
    {
      name: "conservative",
      targetCapital: 1000000,
      netAnnualReturns: 0.03,
    },
    {
      name: "custom",
      targetCapital: 300000,
      NetAnnualReturns: 0.1,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const { formatEuroChart } = useFormat();

  const XAxisTicketFormatter = useCallback((name: string) => {
    switch (name) {
      case "conservative":
        return "Prudente (3%)";
      case "moderate":
        return "Moderato (4%)";
      case "aggressive":
        return "Aggressivo (5%)";
      case "custom":
        return "Personalizzato";
    }

    console.log(name);
    return "test";
  }, []);

  return (
    <Card>
      <div style={{ height: "250px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 80, left: 60, bottom: 5 }}
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
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === activeIndex ? "#182eff" : "#f0f0f0"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default OutputPannelChart;
