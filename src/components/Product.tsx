import React from "react";
import { Center } from "../Center";
import { Text, Button } from "react-native";
import { HomeStackNavProps } from "../types/HomeParamList";

interface ProductProps {}

export const Product: React.FC<ProductProps> = ({
  navigation,
  route,
}: HomeStackNavProps<"Product">) => {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit"
        onPress={() => {
          navigation.navigate("EditProduct", {
            name: route.params.name,
          });
        }}
      />
    </Center>
  );
};
