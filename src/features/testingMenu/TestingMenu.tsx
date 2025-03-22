import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import { PageTitle } from "../../shared/components";

const TestingMenu = () => {
  return (
    <Flex vertical style={{ margin: "16px" }}>
      <PageTitle title="CALCOLATORI" subTitle="Seleziona un calcolatore" />
      <Flex
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <Link to="interesseComposto">
          <Button>Calcolatore dell'interesse composto</Button>
        </Link>
        <Link to="fire">
          <Button>Calcolatore FIRE</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default TestingMenu;
