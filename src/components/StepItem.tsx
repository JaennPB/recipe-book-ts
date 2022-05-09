import React from "react";
import { Flex, Text } from "native-base";

interface Props {
  position: number;
  step: string;
}

const StepItem: React.FC<Props> = (props: Props) => {
  return (
    <Flex direction="row">
      <Text m={1}>
        {props.position}. {props.step}
      </Text>
    </Flex>
  );
};

export default StepItem;
