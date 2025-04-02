import { Card, Empty } from "antd";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useFormat } from "../../../../../../../shared/utils/hooks";
import useOutputPannelChart from "./hooks";

const OutputPannelChart = () => {
  const { formatEuroChart, formatEuro } = useFormat();
  const { isMobile, isValidate, tableData, activeIndex, XAxisTicketFormatter } =
    useOutputPannelChart();

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
              <Bar dataKey="targetCapital" stackId="conservative">
                {isMobile || (
                  <LabelList
                    dataKey="targetCapital"
                    position="right"
                    formatter={(value: number) => formatEuro(value)}
                  />
                )}
                {tableData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === activeIndex ? "#182eff" : "#d9d9d9"}
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
