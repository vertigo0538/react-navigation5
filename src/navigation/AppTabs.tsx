import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "../types/AppParamList";
import { Search } from "../screens/Search";
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import { HomeStack } from "./HomeStack";
import { SearchStack } from "./SearchStack";

interface AppTabsProps {}
const Tabs = createBottomTabNavigator<AppParamList>();
export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // if (route.name === "Home") {
          //   iconName = focused
          //     ? "ios-information-circle"
          //     : "ios-information-circle-outline";
          // } else if (route.name === "Search") {
          //   iconName = focused ? "ios-list-box" : "ios-list";
          // }
          if (route.name === "Home") {
            return <AntDesign name={"home"} size={size} color={color} />;
          } else if (route.name === "Search") {
            return <EvilIcons name={"search"} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack}></Tabs.Screen>
      <Tabs.Screen name="Search" component={SearchStack}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
