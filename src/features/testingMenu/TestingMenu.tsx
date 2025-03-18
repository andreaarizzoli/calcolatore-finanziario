import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import { Title } from "../../shared/components";

const TestingMenu = () => {
  return (
    <Flex vertical style={{ margin: "16px" }}>
      <Title title="CALCOLATORI" subTitle="Seleziona un calcolatore" />
      <Flex>
        <Link to="interesseComposto">
          <Button>Calcolatore dell'interesse composto</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default TestingMenu;
