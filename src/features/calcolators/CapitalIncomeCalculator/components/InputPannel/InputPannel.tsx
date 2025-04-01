import { Flex, Form, InputNumber, Radio, Tooltip } from "antd";
import { InputPannelCard } from "../../../../../shared/components";
import { defaultInputCapitalIncomeData } from "../../utils";
import useCapitalIncomeInputPannel from "./hooks";

const InputPannel = () => {
  const {
    inputSize,
    inputCapitalIncomeData,
    isCustomExpectedAnnualNetReturn,
    handleExpectedAnnualNetReturn,
    handleCapitalIncomeOnChange,
  } = useCapitalIncomeInputPannel();

  return (
    <InputPannelCard>
      <Form.Item
        label="Spese annue previste"
        help="Inserisci una stima delle tue spese annuali."
        style={{ textAlign: "left" }}
      >
        <InputNumber
          addonBefore="€"
          type="number"
          defaultValue={defaultInputCapitalIncomeData.annualExpenses}
          onChange={(val) =>
            handleCapitalIncomeOnChange("annualExpenses", val ?? 0)
          }
          min={0}
          style={{ width: "100%" }}
          size={inputSize}
        />
      </Form.Item>
      <Form.Item
        label="Rendita annua netta"
        name="expectedAnnualNetReturn"
        style={{ marginBottom: "0", textAlign: "left" }}
        help="Seleziona un'opzione oppure seleziona un valore personalizzato."
      >
        <Flex vertical gap={"8px"}>
          <Radio.Group
            block
            optionType="button"
            defaultValue={defaultInputCapitalIncomeData.expectedAnnualNetReturn}
            onChange={(val) =>
              handleExpectedAnnualNetReturn(false, val.target.value ?? 0)
            }
            style={{ width: "100%" }}
            options={[
              {
                value: 3,
                label: (
                  <Tooltip title="3% Prudente">
                    <span>3%</span>
                  </Tooltip>
                ),
              },
              {
                value: 4,
                label: (
                  <Tooltip title="4% Moderato">
                    <span>4%</span>
                  </Tooltip>
                ),
              },
              {
                value: 5.5,
                label: (
                  <Tooltip title="5,5% Aggressivo">
                    <span>5,5%</span>
                  </Tooltip>
                ),
              },
            ]}
            size={inputSize}
            value={
              isCustomExpectedAnnualNetReturn
                ? undefined
                : inputCapitalIncomeData.expectedAnnualNetReturn
            }
          />
          <Radio.Group
            onChange={() => handleExpectedAnnualNetReturn(true, undefined)}
            value={isCustomExpectedAnnualNetReturn ? "custom" : undefined}
            block
            optionType="button"
            style={{ width: "100%", textAlign: "left" }}
            options={[{ label: "Personalizzato", value: "custom" }]}
            size={inputSize}
          />
          <InputNumber<number>
            min={0}
            max={100}
            placeholder="0%"
            formatter={(value) => `${value}%`}
            value={
              isCustomExpectedAnnualNetReturn
                ? inputCapitalIncomeData.expectedAnnualNetReturn
                : undefined
            }
            onChange={(val) => handleExpectedAnnualNetReturn(true, val ?? 0)}
            style={{ width: "100%" }}
            size={inputSize}
            disabled={!isCustomExpectedAnnualNetReturn}
          />
        </Flex>
      </Form.Item>
    </InputPannelCard>
  );
};

export default InputPannel;
