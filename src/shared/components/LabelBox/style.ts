import { Flex, Typography } from "antd";
import styled from "styled-components";
import { breakpoints } from "../../utils/hooks";

const { Title } = Typography;

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

export const TitleStyle = styled(Title)`
  font-size: 18px;
  @media screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 16px !important;
    text-align: left;
  }
`;
