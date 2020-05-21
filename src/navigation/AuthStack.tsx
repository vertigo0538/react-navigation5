import React from "react";
import { Login } from "../screens/Auth/Login";
import { Register } from "../screens/Auth/Register";
import { AuthParamList } from "../types/AuthParamList";

import { createStackNavigator } from "@react-navigation/stack";
interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();
export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
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
  );
};
