import { Col, Row, Space } from "antd";
import Flex from "antd/es/flex";
import { PageTitle } from "../../../../../shared/components";
import InputPannel from "./components/InputPannel";

const DashboardFireCalcolator = () => {
  return (
    <Flex vertical style={{ margin: "16px" }}>
      <PageTitle
        title="Calcolatore FIRE (Financial Independence, Retire Early)"
        subTitle="Scopri in quanti anni puoi raggiungere l’indipendenza finanziaria grazie ai tuoi risparmi e investimenti."
      />
      <Space>
        <Row
          gutter={[24, 24]}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col span={24} md={{ span: 9 }}>
            <InputPannel />
          </Col>
          <Col span={24} md={{ span: 15 }}>
            {/* <OutputPannel inputData={inputData} /> */}
          </Col>
        </Row>
      </Space>
    </Flex>
  );
};

export default DashboardFireCalcolator;
