import React, { useContext } from "react";
import { Center } from "../Center";
import { Text, Button } from "react-native";
import { AuthContext } from "../AuthProvider";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Center>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => logout()}></Button>
    </Center>
  );
};
