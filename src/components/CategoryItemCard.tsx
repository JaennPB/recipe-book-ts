import React from "react";
import { Pressable, Heading } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackParams } from "../../App";
type MealsScreenProp = NativeStackNavigationProp<StackParams>;

interface Props {
  id: number;
  title: string;
  color?: string;
}

const CategoryItemCard: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation<MealsScreenProp>();

  function navigateToMealsHandler(): void {
    navigation.navigate("MealsScreen", {
      categoryId: props.id,
      categoryTitle: props.title,
    });
  }

  return (
    <Pressable
      _pressed={{ opacity: 0.8 }}
      h={150}
      w={150}
      m={5}
      borderRadius={10}
      bg={props.color}
      justifyContent="center"
      alignItems="center"
      shadow="4"
      onPress={navigateToMealsHandler}
    >
      <Heading size="sm" color="white">
        {props.title}
      </Heading>
    </Pressable>
  );
};

export default CategoryItemCard;
