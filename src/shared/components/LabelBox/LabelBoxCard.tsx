import { Card, Col, Divider, Row, Typography } from "antd";
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
      return Math.floor(24 / labelList.length);
    }
  }, [isMobile, isTablet, labelList]);

  const labelBoxList = useMemo(() => {
    const list = labelList.map((label, index) => {
      const { title, value } = label;
      let divider = true;
      if (labelList.length === index + 1) {
        divider = false;
      }
      if (responsiveView === 12 && index % 2) {
        divider = false;
      }

      return (
        <Col key={`${index}-${label.title}`} span={responsiveView}>
          <LabelBoxWrapper>
            <TextContainer vertical>
              <Text type="secondary">{title}</Text>
              <TitleStyle level={4} style={{ margin: 0 }}>
                {value}
              </TitleStyle>
            </TextContainer>
            {divider && (
              <Divider
                type="vertical"
                style={{ height: "50px", margin: "0px" }}
              />
            )}
          </LabelBoxWrapper>
        </Col>
      );
    });
    return list;
  }, [labelList, responsiveView]);

  return (
    <Card>
      <Row gutter={[0, 16]}>{labelBoxList}</Row>
    </Card>
  );
};

export default LabelBoxCard;
