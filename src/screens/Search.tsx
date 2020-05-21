import React from "react";
import { Center } from "../Center";
import { Text } from "react-native";

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
};
