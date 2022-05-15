import { View, FlatList, ListRenderItemInfo } from "react-native";
import { Heading, Center } from "native-base";
import React from "react";

import { MEALS } from "../data/data";
import Meal from "../models/meal";

import { useAppSelector } from "../app/hooks";

import MealItemBox from "../components/MealItemBox";

const FavoritesScreen: React.FC = () => {
  const favoriteMealsArray = useAppSelector((state) => state.favorites);
  const displayedMeals = MEALS.filter((meal) =>
    favoriteMealsArray.includes(meal.id)
  );

  function renderMealsHandler(itemData: ListRenderItemInfo<Meal>): JSX.Element {
    const item = itemData.item;

    return (
      <MealItemBox
        id={item.id}
        title={item.title}
        complexity={item.complexity}
        duration={item.duration}
        imageUrl={item.imageUrl}
      />
    );
  }

  return (
    <View>
      {favoriteMealsArray.length > 0 ? (
        <FlatList data={displayedMeals} renderItem={renderMealsHandler} />
      ) : (
        <Center mt={10}>
          <Heading color="amber.500">Add some favorites!</Heading>
        </Center>
      )}
    </View>
  );
};

export default FavoritesScreen;
