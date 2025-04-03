import { InfoCircleOutlined } from "@ant-design/icons";
import { Card, Col, Collapse, Row, Space, Typography } from "antd";
import { RowStayled, SpaceStayled } from "./style";
import { useMemo } from "react";

const FaqPannel = () => {
  const faqContent = [
    {
      key: "1",
      label: "Perché devo inserire le spese annuali?",
      extra: <InfoCircleOutlined />,
      content:
        "Vivere di rendita vuol dire finanziare le tue spese annuali grazie alle cedole e i dividendi incassati dai tuoi capitali investiti, per questo è importante riuscire a stimarle.",
    },
    {
      key: "2",
      label: "Cosa sono le spese annuali previste?",
      extra: <InfoCircleOutlined />,
      content:
        "Sono le spese che prevedi di sostenere su base annua per vivere la tua vita. Ricordati che oggi hai un determinato livello di spese, ma un domani questo potrebbe cambiare.",
    },
    {
      key: "3",
      label: "Che rendimento atteso posso inserire?",
      extra: <InfoCircleOutlined />,
      content:
        "I rendimenti da dividendo cambiano nel tempo a seconda della situazione sui mercati. Ad un maggior rendimento è connesso un maggior rischio di oscillazioni del capitale.",
    },
  ];

  const generateFaq = useMemo(() => {
    return faqContent.map(({ key, label, extra, content }) => (
      <Col key={key} xs={24} md={8}>
        <Card>
          <Collapse
            ghost
            size="small"
            items={[
              {
                key,
                label,
                extra,
                children: (
                  <SpaceStayled>
                    <Typography.Text type="secondary">
                      {content}
                    </Typography.Text>
                  </SpaceStayled>
                ),
              },
            ]}
          />
        </Card>
      </Col>
    ));
  }, [faqContent]);

  return <RowStayled gutter={[24, 24]}>{generateFaq}</RowStayled>;
};

export default FaqPannel;
