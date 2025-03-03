import { Divider, Flex, Typography } from "antd";
import React, { FC } from "react";
import { LabelBoxProps } from "./types";

const { Text, Title } = Typography;

const LabelBox: FC<LabelBoxProps> = ({ title, value, divider }) => {
  return (
    <Flex justify="space-between" style={{ marginRight: "8px" }}>
      <Flex vertical align="start">
        <Text type="secondary">{title}</Text>
        <Title level={4} style={{ margin: 0 }}>
          {value}
        </Title>
      </Flex>
      {divider && <Divider type="vertical" style={{ height: "50px" }} />}
    </Flex>
  );
};

export default LabelBox;
