import { FutureCapitalInputDataType } from "../../../InputPannel/types";

export interface DataItemChart {
  year: number;
  startingCapital: number;
  capitalContributions: number;
  accruedIinterest: number;
}

export type OutputPannelCenterProps = {
  inputData?: FutureCapitalInputDataType;
};
