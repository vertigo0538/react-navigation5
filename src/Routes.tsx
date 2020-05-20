import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./Screens/Login";
import { Register } from "./Screens/Register";
import { AuthParamList } from "./types/AuthParamList";
interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   header: () => null,
        // }}
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: "Sign Up",
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTitle: "Sign In",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
