import { Col, Flex, Row, Space } from "antd";
import { useState } from "react";
import { PageTitle } from "../../../shared/components";
import InputPannel from "./components/InputPannel/InputPannel";
import { FutureCapitalInputDataType } from "./components/InputPannel/types";
import OutputPannel from "./components/OutputPannel/OutputPannel";

const DashboardFutureCapitalSimulator = () => {
  const [inputData, setInputData] = useState<FutureCapitalInputDataType>();

  return (
    <Flex vertical>
      <PageTitle
        title="Calcolatore dell'interesse composto"
        subTitle="Scopri come i tuoi risparmi e investimenti possono crescere nel tempo sfruttando la forza dell'interesse composto."
      />
      <Space>
        <Row
          gutter={[24, 24]}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col span={24} md={{ span: 9 }}>
            <InputPannel onSendData={setInputData} />
          </Col>
          <Col span={24} md={{ span: 15 }}>
            <OutputPannel inputData={inputData} />
          </Col>
        </Row>
      </Space>
    </Flex>
  );
};

export default DashboardFutureCapitalSimulator;
