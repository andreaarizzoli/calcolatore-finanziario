import { Typography } from "antd";
import styled from "styled-components";
import { breakpoints } from "../../utils/hooks";
const { Title, Text } = Typography;

export const TitleStyled = styled(Title)`
  font-size: 24px;
  @media screen and (max-width: ${breakpoints.tablet}px) {
    font-size: 22px !important;
  }
  @media screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 18px !important;
    text-align: left;
  }
`;

export const TextStyled = styled(Text)`
  text-align: left;
  max-width: 100%;
`;
