import React from "react";
import {
  Text,
  Image,
  AspectRatio,
  Flex,
  ScrollView,
  VStack,
  Heading,
} from "native-base";

import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackParams } from "../../App";
type MealDetailsScreenProp = NativeStackNavigationProp<StackParams>;

import { MEALS } from "../data/data";
import IngredientItem from "../components/IngredientItem";
import StepItem from "../components/StepItem";

const MealDetailsScreen: React.FC = () => {
  const route = useRoute<RouteProp<StackParams, "MealDetailsScreen">>();
  const navigation = useNavigation<MealDetailsScreenProp>();
  const selectedMeal = MEALS.find((item) => item.id === route.params.mealId)!;

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: selectedMeal.title });
  }, [selectedMeal]);

  return (
    <ScrollView>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image source={{ uri: selectedMeal.imageUrl }} alt="image" />
      </AspectRatio>
      <Flex align="center">
        <Heading py={5}>Ingredients</Heading>
        <VStack px={10} w="100%">
          {selectedMeal.ingredients.map((item: string) => (
            <IngredientItem key={item} name={item} />
          ))}
        </VStack>
        <Heading py={5}>Steps</Heading>
        <VStack px={10} pb={5}>
          {selectedMeal.steps.map((item: string, index: number) => (
            <StepItem key={index} position={index + 1} step={item} />
          ))}
        </VStack>
      </Flex>
    </ScrollView>
  );
};

export default MealDetailsScreen;
