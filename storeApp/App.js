import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./src/pages/Products/Products";
import Details from "./src/pages/Detail/Detail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"ProductsPage"}
          component={Products}
          options={{
            title: "Store",
            headerStyle: { backgroundColor: "thistle" },
            headerTitleStyle: { color: "rebeccapurple" },
          }}
        />
        <Stack.Screen
          name={"DetailsPage"}
          component={Details}
          options={{
            title: "Product Detail",
            headerStyle: { backgroundColor: "thistle" },
            headerTitleStyle: { color: "rebeccapurple" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
