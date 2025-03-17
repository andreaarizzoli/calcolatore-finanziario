import { Divider, Flex } from "antd";
import { FC } from "react";
import { TextStyled, TitleStyled } from "./style";
import { TitleProps } from "./types";

const PageTitle: FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <Flex align="start" vertical>
      <TitleStyled level={3}>{title}</TitleStyled>
      <TextStyled type="secondary">{subTitle}</TextStyled>
      <Divider />
    </Flex>
  );
};

export default PageTitle;
