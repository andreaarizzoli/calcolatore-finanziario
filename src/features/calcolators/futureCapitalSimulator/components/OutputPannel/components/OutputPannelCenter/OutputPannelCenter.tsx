import { Card, Empty, Typography } from "antd";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useFormat } from "../../../../../../../shared/utils/hooks/useFormat";
import { useOutputPannel } from "../../hooks.ts";
import { DataItemChart, OutputPannelCenterProps } from "./types";

const OutputPannelCenter: FC<OutputPannelCenterProps> = ({ inputData }) => {
  const { isValidate, calculateDataChart } = useOutputPannel({ inputData });

  const { formatEuro, formatEuroChart } = useFormat();
  const [data, setData] = useState<DataItemChart[]>([]);

  useEffect(() => {
    const tableData = calculateDataChart();
    setData(tableData);
  }, [inputData, calculateDataChart]);

  const CustomTooltip = useCallback(
    ({ active, payload, label }: any) => {
      if (!active || !payload?.length) return null;

      return (
        <div
          className="custom-tooltip"
          style={{
            width: "200px",
            backgroundColor: "white",
            padding: "0 20px 20px 20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <p>
            <Typography.Title level={5}>Anno {label} </Typography.Title>
          </p>
          {[
            {
              color: "#182eff",
              label: "Interessi",
              value: payload[2].value,
            },
            {
              color: "#f0f0f0",
              label: "Versamenti",
              value: payload[1].value ?? 0,
            },
            {
              color: "#d9d9d9",
              label: "Capitale iniziale",
              value: payload[0].value,
            },
          ].map(({ color, label, value }, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "bottom",
              }}
            >
              <div>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: color,
                    marginRight: "5px",
                    display: "inline-block",
                  }}
                />
                <span>{label}:</span>
              </div>
              <span>{formatEuro(value)}</span>
            </div>
          ))}
        </div>
      );
    },
    [formatEuro]
  );

  const CustomLegend = useMemo(
    () => (
      <div>
        {[
          { color: "#d9d9d9", label: "Capitale iniziale" },
          { color: "#f0f0f0", label: "Versamenti" },
          { color: "#182eff", label: "Interessi" },
        ].map(({ color, label }, index) => (
          <div
            key={index}
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: color,
                marginRight: "5px",
              }}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    ),
    []
  );

  return (
    <Card>
      {isValidate ? (
        <div style={{ height: "500px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={formatEuroChart} />
              <Tooltip content={<CustomTooltip />} />
              <Legend content={CustomLegend} />
              <Bar dataKey="startingCapital" stackId="a" fill="#d9d9d9" />
              <Bar dataKey="capitalContributions" stackId="a" fill="#f0f0f0" />
              <Bar dataKey="accruedIinterest" stackId="a" fill="#182eff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <Empty style={{ height: 430 }} />
      )}
    </Card>
  );
};

export default OutputPannelCenter;
