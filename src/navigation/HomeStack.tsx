import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeParamList } from "../types/HomeParamList";
import { Feed } from "../components/Feed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../AuthProvider";
import { Text } from "react-native";
import { Product } from "../components/Product";

interface HomeStackProps {}
const Stack = createStackNavigator<HomeParamList>();
export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `product: ${route.params.name}`,
        })}
        name="Product"
        component={Product}
      />
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => logout()}>
                <Text>logout</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};
