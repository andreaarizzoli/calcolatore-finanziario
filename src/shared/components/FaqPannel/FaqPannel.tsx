import { InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Col, Collapse, Row, Space, Typography } from "antd";
import { FC, useMemo } from "react";
import { FaqPannelProps } from "./types";

const FaqPannel: FC<FaqPannelProps> = ({ faqPallelContent }) => {
  const generateFaq = useMemo(() => {
    return faqPallelContent.map(({ key, label, extra, content }) => (
      <Col key={key} xs={24} md={8}>
        <Card>
          <Collapse
            ghost
            size="small"
            items={[
              {
                key,
                label,
                extra,
                children: (
                  <Space style={{ paddingLeft: "24px" }}>
                    <Typography.Text type="secondary">
                      {content}
                    </Typography.Text>
                  </Space>
                ),
              },
            ]}
          />
        </Card>
      </Col>
    ));
  }, []);

  return (
    <Row style={{ textAlign: "start" }} gutter={[16, 16]}>
      {generateFaq}
    </Row>
  );
};

export default FaqPannel;
