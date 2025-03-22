import { Card, Col, Row, Typography } from "antd";
import { FC, useMemo } from "react";
import { useMobile } from "../../utils/hooks";
import { LabelBoxWrapper, TextContainer, TitleStyle } from "./style";
import { LabelBoxProps } from "./types";

const { Text } = Typography;

const LabelBoxCard: FC<LabelBoxProps> = ({ labelList }) => {
  const { isMobile, isTablet } = useMobile();

  const responsiveView = useMemo(() => {
    if (isMobile || isTablet) {
      return 12;
    } else {
      return 6;
    }
  }, [isMobile, isTablet, labelList]);

  const labelBoxList = useMemo(() => {
    const groupedList = [];

    for (let i = 0; i < labelList.length; i += 4) {
      const rowItems = labelList.slice(i, i + 4).map((label, index) => {
        const { title, value } = label;
        return (
          <Col key={`${i + index}-${label.title}`} span={responsiveView}>
            <LabelBoxWrapper>
              <TextContainer vertical>
                <Text type="secondary">{title}</Text>
                <TitleStyle level={4} style={{ margin: 0 }}>
                  {value}
                </TitleStyle>
              </TextContainer>
            </LabelBoxWrapper>
          </Col>
        );
      });

      groupedList.push(
        <Row key={`row-${i}`} gutter={[16, 16]} style={{ width: "100%" }}>
          {rowItems}
        </Row>
      );
    }

    return groupedList;
  }, [labelList, responsiveView]);

  return (
    <Card>
      <Row gutter={[16, 16]}>{labelBoxList}</Row>
    </Card>
  );
};

export default LabelBoxCard;
