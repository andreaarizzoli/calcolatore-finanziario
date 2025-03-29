import { Col } from "antd";
import { FC } from "react";
import PageTitle from "../PageTitle/PageTitle";
import {
  DashboardContentStyle,
  DashboardPageStyle,
  DashboardRowStyle,
} from "./style";
import { CalcolatorDashboardProps } from "./types";

const CalcolatorDashboard: FC<CalcolatorDashboardProps> = ({
  title,
  subTitle,
  inputPannel,
  outputPannel,
}) => {
  return (
    <DashboardPageStyle vertical>
      <PageTitle title={title} subTitle={subTitle} />
      <DashboardContentStyle>
        <DashboardRowStyle gutter={[24, 24]}>
          <Col span={24} md={{ span: 9 }}>
            {inputPannel}
          </Col>
          <Col span={24} md={{ span: 15 }}>
            {outputPannel}
          </Col>
        </DashboardRowStyle>
      </DashboardContentStyle>
    </DashboardPageStyle>
  );
};

export default CalcolatorDashboard;
