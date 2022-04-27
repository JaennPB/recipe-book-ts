import React from "react";
import { View, FlatList, ListRenderItemInfo } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";
import type { StackParams } from "../../App";

import { MEALS } from "../data/data";
import Meal from "../models/meal";
import MealItemBox from "../components/MealItemBox";

const MealsScreen: React.FC = () => {
  const route = useRoute<RouteProp<StackParams, "MealsScreen">>();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0
  );

  function renderMealsHandler(itemData: ListRenderItemInfo<Meal>): JSX.Element {
    const meal = itemData.item;

    return (
      <MealItemBox
        title={meal.title}
        complexity={meal.complexity}
        duration={meal.duration}
        imageUrl={meal.imageUrl}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsHandler}
      />
    </View>
  );
};

export default MealsScreen;
