import { Flex, Form } from "antd";
import { FC, ReactNode } from "react";
import { InputCardStyle } from "./style";

type InputPannelCardProps = {
  children: ReactNode;
};
const InputPannelCard: FC<InputPannelCardProps> = ({ children }) => {
  return (
    <InputCardStyle>
      <Form layout="vertical">
        <Flex vertical gap={24}>
          {children}
        </Flex>
      </Form>
    </InputCardStyle>
  );
};

export default InputPannelCard;
