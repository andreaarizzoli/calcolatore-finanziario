import { Col, Flex, Row } from "antd";
import { useState } from "react";
import { Title } from "../../shared/components";
import InputPannel from "./components/InputPannel/InputPannel";
import { FutureCapitalInputDataType } from "./components/InputPannel/types";
import OutputPannel from "./components/OutputPannel/OutputPannel";

const Dashboard = () => {
  const [inputData, setInputData] = useState<FutureCapitalInputDataType>();

  return (
    <Flex vertical style={{ margin: "16px" }}>
      <Title
        title="Calcolatore dell'interesse composto"
        subTitle="Scopri come i tuoi risparmi e investimenti possono crescere nel tempo sfruttando la forza dell'interesse composto."
      />
      <Row gutter={24}>
        <Col span={9}>
          <InputPannel onSendData={setInputData} />
        </Col>
        <Col span={15}>
          <OutputPannel inputData={inputData} />
        </Col>
      </Row>
    </Flex>
  );
};

export default Dashboard;
