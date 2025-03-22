import { Flex } from "antd";
import { FC } from "react";
import {
  OutputPannelBottom,
  OutputPannelCenter,
  OutputPannelTop,
} from "./components";
import { OutputPannelProps } from "./type";

const OutputPannel: FC<OutputPannelProps> = ({ inputData }) => {
  return (
    <Flex vertical gap="24px">
      <OutputPannelTop inputData={inputData} />
      <OutputPannelCenter inputData={inputData} />
      <OutputPannelBottom inputData={inputData} />
    </Flex>
  );
};

export default OutputPannel;
