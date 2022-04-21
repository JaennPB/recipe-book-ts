import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Center } from "native-base";

import { CATEGORIES } from "../data/data";
import Category from "../models/category";
import CategoryGridBox from "../components/CategoryGridBox";

const CategoryScreen: React.FC = () => {
  function renderCategoryItemHandler(
    itemData: ListRenderItemInfo<Category>
  ): JSX.Element {
    return (
      <CategoryGridBox
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
        renderItem={renderCategoryItemHandler}
        numColumns={2}
      />
    </Center>
  );
};

export default CategoryScreen;
