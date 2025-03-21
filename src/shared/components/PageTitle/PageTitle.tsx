import { Divider, Flex, Space } from "antd";
import { FC, useCallback, useMemo } from "react";
import { TextStyled, TitleStyled } from "./style";
import { TitleProps } from "./types";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const PageTitle: FC<TitleProps> = ({ title, subTitle }) => {
  const location = useLocation();

  const backNavigation = useMemo(() => {
    if (location.pathname !== "/") {
      return (
        <Link to={"/"} style={{ color: "#000000e0" }}>
          <ArrowLeftOutlined
            style={{ height: "25px", width: "25px", paddingTop: "10px" }}
          />
        </Link>
      );
    }
  }, [location.pathname]);

  return (
    <Flex align="start" vertical>
      <Space>
        {backNavigation}
        <TitleStyled level={3}>{title}</TitleStyled>
      </Space>
      <TextStyled type="secondary">{subTitle}</TextStyled>
      <Divider />
    </Flex>
  );
};

export default PageTitle;
