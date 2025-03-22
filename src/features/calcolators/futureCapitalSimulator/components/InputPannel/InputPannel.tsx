import { Card, Flex, Form, InputNumber, Radio, Tooltip } from "antd";
import { FC, useEffect } from "react";
import { useInputPannel } from "./hooks";
import { InputPannelType } from "./types";
import {
  contributionFrequencyTypeOptions,
  vestmentHorizonOptions,
} from "./utils";

const InputPannel: FC<InputPannelType> = ({ onSendData }) => {
  const {
    inputData,
    isCustomVestmentHorizon,
    isExpectedAnnualNetReturn,
    inputSize,
    handleOnChange,
    handleExpectedAnnualNetReturn,
    handleVestmentHorizon,
  } = useInputPannel();

  useEffect(() => {
    onSendData(inputData);
  }, [inputData, onSendData]);

  return (
    <Card style={{ width: "100%", textAlign: "left" }}>
      <Form layout="vertical">
        <Flex vertical gap={24}>
          <Form.Item
            label="Capitale iniziale"
            help="Inserisci il capitale iniziale. Può anche essere zero."
          >
            <InputNumber
              addonBefore="€"
              type="number"
              defaultValue={inputData.initialAmount}
              onChange={(val) => handleOnChange("initialAmount", val ?? 0)}
              min={0}
              style={{ width: "100%" }}
              size={inputSize}
            />
          </Form.Item>
          <Flex vertical gap={"8px"}>
            <Form.Item
              label="Versamenti aggiuntivi"
              name="contributionFrequencyType"
              style={{ marginBottom: "0" }}
            >
              <Radio.Group
                block
                optionType="button"
                defaultValue={inputData.contributionFrequencyType}
                onChange={(val) =>
                  handleOnChange(
                    "contributionFrequencyType",
                    val.target.value || 0
                  )
                }
                style={{ width: "100%" }}
                options={contributionFrequencyTypeOptions}
                size={inputSize}
              />
            </Form.Item>
            <Form.Item
              name="contributionAmount"
              help="Inserisci la quota di versamenti periodici. Può anche essere zero."
            >
              <InputNumber
                addonBefore="€"
                type="number"
                defaultValue={inputData.contributionAmount}
                onChange={(val) =>
                  handleOnChange("contributionAmount", val ?? 0)
                }
                min={0}
                style={{ width: "100%" }}
                size={inputSize}
              />
            </Form.Item>
          </Flex>
          <Form.Item
            id="vestmentHorizon"
            label="Anni d'investimento"
            help="Inserisci l'orizzonte temporale del tuo investimento."
          >
            <Flex vertical gap="8px">
              <Flex gap="8px">
                <Radio.Group
                  defaultValue={inputData.vestmentHorizon}
                  value={
                    isCustomVestmentHorizon
                      ? undefined
                      : inputData.vestmentHorizon
                  }
                  onChange={(val) =>
                    handleVestmentHorizon(false, val.target.value ?? 0)
                  }
                  block
                  optionType="button"
                  style={{ width: "100%" }}
                  options={vestmentHorizonOptions}
                  size={inputSize}
                />
              </Flex>
              <Radio.Group
                onChange={() => handleVestmentHorizon(true, undefined)}
                value={isCustomVestmentHorizon ? "custom" : undefined}
                block
                optionType="button"
                style={{ width: "100%", textAlign: "left" }}
                options={[{ label: "Personalizzato", value: "custom" }]}
                size={inputSize}
              />
              <InputNumber
                type="number"
                min={0}
                placeholder="0"
                value={
                  isCustomVestmentHorizon
                    ? inputData.vestmentHorizon
                    : undefined
                }
                onChange={(val) => handleVestmentHorizon(true, val ?? 0)}
                style={{ width: "100%" }}
                size={inputSize}
                disabled={!isCustomVestmentHorizon}
              />
            </Flex>
          </Form.Item>
          <Form.Item
            name="expectedAnnualNetReturn"
            label="Tasso di rendimento atteso annuo"
            help="Inserisci il tasso di rendimento atteso."
          >
            <Flex vertical gap="8px">
              <Flex gap="8px">
                <Radio.Group
                  defaultValue={inputData.expectedAnnualNetReturn}
                  value={
                    isExpectedAnnualNetReturn
                      ? undefined
                      : inputData.expectedAnnualNetReturn
                  }
                  onChange={(val) =>
                    handleExpectedAnnualNetReturn(false, val.target.value ?? 0)
                  }
                  block
                  optionType="button"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                  size={inputSize}
                  options={[
                    {
                      label: (
                        <Tooltip title="100% Azionario">
                          <span>8%</span>
                        </Tooltip>
                      ),

                      value: 8,
                    },
                    {
                      label: (
                        <Tooltip title="80% Azionario">
                          <span>7,5%</span>
                        </Tooltip>
                      ),
                      value: 7.5,
                    },
                    {
                      label: (
                        <Tooltip title="60% Azionario">
                          <span>6%</span>
                        </Tooltip>
                      ),
                      value: 6,
                    },
                    {
                      label: (
                        <Tooltip title="40% Azionario">
                          <span>4,5%</span>
                        </Tooltip>
                      ),
                      value: 4.5,
                    },
                    {
                      label: (
                        <Tooltip title="20% Azionario">
                          <span>3%</span>
                        </Tooltip>
                      ),
                      value: 3,
                    },
                    {
                      label: (
                        <Tooltip title="0% Azionario">
                          <span>2%</span>
                        </Tooltip>
                      ),
                      value: 2,
                    },
                  ]}
                />
              </Flex>
              <Radio.Group
                onChange={() => handleExpectedAnnualNetReturn(true, undefined)}
                value={isExpectedAnnualNetReturn ? "custom" : undefined}
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
                  isExpectedAnnualNetReturn
                    ? inputData.expectedAnnualNetReturn
                    : undefined
                }
                onChange={(val) =>
                  handleExpectedAnnualNetReturn(true, val ?? 0)
                }
                style={{ width: "100%" }}
                size={inputSize}
                disabled={!isExpectedAnnualNetReturn}
              />
            </Flex>
          </Form.Item>
        </Flex>
      </Form>
    </Card>
  );
};

export default InputPannel;
