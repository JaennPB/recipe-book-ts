import React from "react";
import {
  Text,
  Pressable,
  Image,
  Heading,
  Box,
  AspectRatio,
  Flex,
} from "native-base";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackParams } from "../../App";
type MealDetailsScreenProp = NativeStackNavigationProp<StackParams>;

interface Props {
  id: string;
  title: string;
  duration: number;
  complexity: number;
  imageUrl: string;
}

const MealItemBox: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation<MealDetailsScreenProp>();

  function navigateToMealDetailsHandler(): void {
    navigation.navigate("MealDetailsScreen", {
      mealId: props.id,
    });
  }

  return (
    <Pressable
      _pressed={{ opacity: 0.8 }}
      onPress={navigateToMealDetailsHandler}
    >
      <Box
        m={5}
        borderRadius={10}
        justifyContent="center"
        alignItems="center"
        shadow="4"
        bg="amber.100"
        overflow="hidden"
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{ uri: props.imageUrl }} alt="image" />
          </AspectRatio>
          <Heading
            size="sm"
            p={2}
            position="absolute"
            bottom="0"
            bg="amber.400"
            color="white"
          >
            {props.title}
          </Heading>
        </Box>
        <Flex
          w="100%"
          direction="row"
          justify="space-around"
          alignItems="center"
          p={2}
        >
          <Text>{props.duration} min</Text>
          <Text>{props.complexity}</Text>
        </Flex>
      </Box>
    </Pressable>
  );
};

export default MealItemBox;
