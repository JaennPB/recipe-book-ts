import React from "react";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealsScreen from "./src/screens/MealsScreen";
import MealDetailsScreen from "./src/screens/MealDetailsScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";

export type StackParams = {
  StackCategoriesScreen: undefined;
  FavoritesScreen: undefined;
  DrawerCategoriesScreen: undefined;
  MealsScreen: { categoryId: number; categoryTitle: string };
  MealDetailsScreen: { mealId: string };
};

const Stack = createNativeStackNavigator<StackParams>();
const Drawer = createDrawerNavigator<StackParams>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="StackCategoriesScreen"
        component={CategoriesScreen}
        options={{ title: "Categories" }}
      />
      <Drawer.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ title: "Favorites" }}
      />
    </Drawer.Navigator>
  );
}

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DrawerCategoriesScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MealsScreen" component={MealsScreen} />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
