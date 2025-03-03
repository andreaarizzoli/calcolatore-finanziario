import { Card, Col, Row } from "antd";
import { FC } from "react";
import { LabelBox } from "../../../../../../shared/components";
import { useFormat } from "../../../../../../shared/utils/hooks";
import { OutputPannelBottomProps } from "./types";
import { useOutputPannel } from "../../hooks.ts";

const OutputPannelBottom: FC<OutputPannelBottomProps> = ({ inputData }) => {
  const { formatEuro, formatYear, formatPercent } = useFormat();
  const {
    expectedAnnualNetReturn,
    initialAmount,
    totalContributions,
    vestmentHorizon,
  } = useOutputPannel({ inputData });

  return (
    <Card>
      <Row>
        <Col span={6}>
          <LabelBox
            divider
            title="Capitale Iniziale"
            value={formatEuro(initialAmount)}
          />
        </Col>
        <Col span={6}>
          <LabelBox
            divider
            title="Versamenti aggiuntivi "
            value={formatEuro(totalContributions)}
          />
        </Col>
        <Col span={6}>
          <LabelBox
            divider
            title="Orizzonte"
            value={formatYear(vestmentHorizon)}
          />
        </Col>
        <Col span={6}>
          <LabelBox
            title="Rendimento Annuo atteso"
            value={formatPercent(expectedAnnualNetReturn)}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default OutputPannelBottom;
