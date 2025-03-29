import { Flex } from "antd";
import OutputPannelTop from "./components/OutputPannelTop/OutputPannelTop";
import OutputPannelChart from "./components/OutputPannelChart";

const OutputPannel = () => {
  return (
    <Flex vertical gap="24px">
      <OutputPannelTop />
      <OutputPannelChart />
    </Flex>
  );
};

export default OutputPannel;
