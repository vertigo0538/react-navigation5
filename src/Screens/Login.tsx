import React, { useContext } from "react";
import { Center } from "../Center";
import { Button, Text } from "react-native";
import { AuthNavProps } from "../types/AuthParamList";
import { AuthContext } from "../AuthProvider";

interface LoginProps {}
export const Login = ({ navigation }: AuthNavProps<"Login">) => {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      ></Button>
    </Center>
  );
};
