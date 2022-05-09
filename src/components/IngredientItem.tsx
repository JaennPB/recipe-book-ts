import React from "react";
import { Box, Text } from "native-base";

interface Props {
  name: string;
}

const IngredientItem: React.FC<Props> = (props: Props) => {
  return (
    <Box bg="amber.400" m={1} py={2} px={10} borderRadius={100}>
      <Text color="white" fontWeight="semibold">
        {props.name}
      </Text>
    </Box>
  );
};

export default IngredientItem;
