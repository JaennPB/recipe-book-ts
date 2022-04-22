import React from "react";
import { View, Text } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";
import type { StackParams } from "../../App";

const MealsScreen: React.FC = () => {
  const route = useRoute<RouteProp<StackParams, "MealsScreen">>();
  const catId = route.params.categoryId;

  return (
    <View>
      <Text>MealsScreen, {catId}</Text>
    </View>
  );
};

export default MealsScreen;
