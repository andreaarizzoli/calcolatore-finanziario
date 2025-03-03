import { FC } from "react";
import { TitleProps } from "./types";
import { Divider, Flex, Typography } from "antd";
import { containerStyle } from "./style";
const { Title, Text } = Typography;

const PageTitle: FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <Flex style={containerStyle} align="start" vertical>
      <Title level={3}>{title}</Title>
      <Text type="secondary">{subTitle}</Text>
      <Divider />
    </Flex>
  );
};

export default PageTitle;
