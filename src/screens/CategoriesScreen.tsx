import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Center } from "native-base";

import { CATEGORIES } from "../data/data";
import Category from "../models/category";
import CategoryGridBox from "../components/CategoryGridBox";

const CategoryScreen: React.FC = () => {
  function renderCategoriesHandler(
    itemData: ListRenderItemInfo<Category>
  ): JSX.Element {
    return (
      <CategoryGridBox
        id={itemData.item.id}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  }

  return (
    <Center>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoriesHandler}
        numColumns={2}
      />
    </Center>
  );
};

export default CategoryScreen;
