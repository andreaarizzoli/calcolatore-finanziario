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
  const {
    totalInvested,
    accruedInterest,
    endCapital,
    accruedInterestPerc,
    isValidate,
  } = useOutputPannel({
    inputData,
  });

  return (
    <Card>
      <Row>
        <Col span={6}>
          <LabelBox
            divider
            title="Capitale Investito"
            value={isValidate ? formatEuro(totalInvested) : "-"}
          />
        </Col>
        <Col span={6}>
          <LabelBox
            divider
            title="Capitale Finale"
            value={isValidate ? formatEuro(endCapital) : "-"}
          />
        </Col>
        <Col span={6}>
          <LabelBox
            divider
            title="Rendimento Lordo"
            value={isValidate ? formatEuro(accruedInterest) : "-"}
          />
        </Col>
        <Col span={6}>
          <LabelBox
            title="Rendimento Lordo %"
            value={isValidate ? formatPercent(accruedInterestPerc) : "-"}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default OutputPannelTop;
