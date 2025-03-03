import { FutureCapitalInputDataType } from "../../../InputPannel/types";

export interface DataItem {
  year: string;
  value: number;
  type: string;
}

export interface Annotation {
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
