import { Col, Empty, Flex, Row, Space } from "antd";
import { useMemo, useState } from "react";
import { Title } from "../../shared/components";
import InputPannel from "./components/InputPannel/InputPannel";
import { FutureCapitalInputDataType } from "./components/InputPannel/types";
import OutputPannel from "./components/OutputPannel/OutputPannel";
import { useMobile } from "../../shared/utils/hooks";

const Dashboard = () => {
  const [inputData, setInputData] = useState<FutureCapitalInputDataType>();
  const { isMobile, isTablet } = useMobile();

  const page = useMemo(() => {
    if (isMobile || isTablet) {
      return (
        <Empty description="La risoluzione Mobile e Table non è al momento disponibile" />
      );
    } else {
      return (
        <div>
          <Space>
            <Row gutter={24}>
              <Col span={9}>
                <InputPannel onSendData={setInputData} />
              </Col>
              <Col span={15}>
                <OutputPannel inputData={inputData} />
              </Col>
            </Row>
          </Space>
        </div>
      );
    }
  }, [isMobile, isTablet, inputData]);

  return (
    <Flex vertical style={{ margin: "16px" }}>
      <Title
        title="Calcolatore dell'interesse composto"
        subTitle="Scopri come i tuoi risparmi e investimenti possono crescere nel tempo sfruttando la forza dell'interesse composto."
      />
      {page}
    </Flex>
  );
};

export default Dashboard;
