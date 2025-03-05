import { Divider, Flex, Typography } from "antd";
import React, { FC } from "react";
import { LabelBoxProps } from "./types";
import styled from "styled-components";

const { Text, Title } = Typography;

export const LabelBoxWrapper = styled(Flex)(() => ({
  marginRight: "8px",
  textAlign: "left",
  height: "100%",
  justifyContent: "space-between",
}));

export const TextContainer = styled(Flex)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const LabelBox: FC<LabelBoxProps> = ({ title, value, divider }) => {
  return (
    <LabelBoxWrapper>
      <TextContainer vertical>
        <Text type="secondary">{title}</Text>
        <Title level={4} style={{ margin: 0 }}>
          {value}
        </Title>
      </TextContainer>
      {divider && <Divider type="vertical" style={{ height: "50px" }} />}
    </LabelBoxWrapper>
  );
};

export default LabelBox;
