import React from "react";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealsScreen from "./src/screens/MealsScreen";

export type StackParams = {
  CategoriesScreen: undefined;
  MealsScreen: { categoryId: number; categoryTitle: string };
};

const RootStack = createNativeStackNavigator<StackParams>();

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{ headerTitle: "Categories" }}
          />
          <RootStack.Screen name="MealsScreen" component={MealsScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
