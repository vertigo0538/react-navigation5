import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "../types/AppParamList";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
interface AppTabsProps {}
const Tabs = createBottomTabNavigator<AppParamList>();
export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home}></Tabs.Screen>
      <Tabs.Screen name="Search" component={Search}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
