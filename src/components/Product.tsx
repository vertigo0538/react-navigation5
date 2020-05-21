import React from "react";
import { Center } from "../Center";
import { Text } from "react-native";
import { HomeStackNavProps } from "../types/HomeParamList";

interface ProductProps {}

export const Product: React.FC<ProductProps> = ({
  route,
}: HomeStackNavProps<"Product">) => {
  return (
    <Center>
      <Text>{route.params.name}</Text>
    </Center>
  );
};
