import { InfoCircleOutlined } from "@ant-design/icons";
import { Card, Col, Collapse, Row, Space, Typography } from "antd";
import { useMemo } from "react";
import { FaqPannel } from "../../../../../shared/components";

const CapitalIncomeFaq = () => {
  const CapitalIncomeFaqContent = [
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

  return <FaqPannel faqPallelContent={CapitalIncomeFaqContent} />;
};

export default CapitalIncomeFaq;
