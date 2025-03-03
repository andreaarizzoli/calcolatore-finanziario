import { Card, Col, Row } from "antd";
import { FC } from "react";
import { LabelBox } from "../../../../../../shared/components";
import { useFormat } from "../../../../../../shared/utils/hooks";
import { FutureCapitalInputDataType } from "../../../InputPannel/types";
import { useOutputPannel } from "../../hooks.ts";

export type OutputPannelTopProps = {
  inputData?: FutureCapitalInputDataType;
};

const OutputPannelTop: FC<OutputPannelTopProps> = ({ inputData }) => {
  const { formatEuro, formatPercent } = useFormat();
  const { totalInvested, accruedInterest, endCapital, accruedInterestPerc } =
    useOutputPannel({
      inputData,
    });

  return (
    <Card>
      <Row>
        <Col span={6}>
          <LabelBox
            divider
            title="Capitale Investito"
            value={formatEuro(totalInvested)}
          />
        </Col>
        <Col span={6}>
          <LabelBox
            divider
            title="Capitale Finale"
            value={formatEuro(endCapital)}
          />
        </Col>
        <Col span={6}>
          <LabelBox
            divider
            title="Rendimento Lordo"
            value={formatEuro(accruedInterest)}
          />
        </Col>
        <Col span={6}>
          <LabelBox
            title="Rendimento Lordo %"
            value={formatPercent(accruedInterestPerc)}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default OutputPannelTop;
