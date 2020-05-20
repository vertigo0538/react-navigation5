import React from "react";
import { Center } from "../Center";
import { Button, Text } from "react-native";
import { AuthNavProps } from "../types/AuthParamList";

interface LoginProps {}
export const Login = ({ navigation }: AuthNavProps<"Login">) => {
  return (
    <Center>
      <Text>Login Screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      ></Button>
    </Center>
  );
};
