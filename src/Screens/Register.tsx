import React from "react";
import { Center } from "../Center";
import { Button, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList, AuthNavProps } from "../types/AuthParamList";
import { RouteProp } from "@react-navigation/native";

interface RegisterProps {}
export const Register = ({ route, navigation }: AuthNavProps<"Register">) => {
  return (
    <Center>
      <Text>Register Screen</Text>
      <Text>route name: {route.name}</Text>
      <Button
        title="go to Login"
        onPress={() => {
          navigation.navigate("Login");

          //   navigation.goBack();
        }}
      ></Button>
    </Center>
  );
};
