import React from "react";
import { View, FlatList, ListRenderItemInfo } from "react-native";

import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackParams } from "../../App";
type MealsScreenProp = NativeStackNavigationProp<StackParams>;

import { MEALS } from "../data/data";
import Meal from "../models/meal";
import MealItemBox from "../components/MealItemBox";

const MealsScreen: React.FC = () => {
  const route = useRoute<RouteProp<StackParams, "MealsScreen">>();
  const navigation = useNavigation<MealsScreenProp>();

  const catId = route.params.categoryId;
  const catTitle = route.params.categoryTitle;

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: catTitle });
  }, [catTitle]);

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
