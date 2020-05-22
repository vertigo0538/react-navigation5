import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchParamList } from "../types/SearchParamList";
import { Search } from "../screens/Search";
import { ProductRoute } from "./routes/ProductRoutes";

interface SearchStackProps {}
const Stack = createStackNavigator<SearchParamList>();
export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
      {ProductRoute(Stack)}
    </Stack.Navigator>
  );
};
