import Flex from "antd/es/flex";
import { CalcolatorDashboard } from "../../../../../shared/components";
import InputPannel from "../../components/InputPannel";
import OutputPannel from "../../components/OutputPannel";
import CapitalIncomeProvider from "../../provider/CapitalIncomeProvider";

const DashboardCapitalIncomeCalculator = () => {
  return (
    <CapitalIncomeProvider>
      <Flex vertical style={{ margin: "16px" }}>
        <CalcolatorDashboard
          title={"Calcolatore rendita da capitale"}
          subTitle={
            "Scopri di quanti soldi hai bisogno per vivere di rendita in base al tenore di vita desiderato."
          }
          inputPannel={<InputPannel />}
          outputPannel={<OutputPannel />}
        />
      </Flex>
    </CapitalIncomeProvider>
  );
};

export default DashboardCapitalIncomeCalculator;
