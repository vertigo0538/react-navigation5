import React, { useRef, useEffect, useState } from "react";
import { Center } from "../Center";
import { Text, Alert } from "react-native";
import { HomeStackNavProps } from "../types/HomeParamList";

interface EditProductProps {}

function apiCall(x: any) {
  return x;
}
export const EditProduct: React.FC<EditProductProps> = ({
  navigation,
  route,
}: HomeStackNavProps<"EditProduct">) => {
  const [formState] = useState(1);
  const submit = useRef(() => {});
  submit.current = () => {
    apiCall(formState);
    navigation.goBack();
  };
  useEffect(() => {
    console.log("EditProduct useEffect", submit.current);
    navigation.setParams({ submit });
  }, []);
  return (
    <Center>
      <Text>editing... {route.params.name}</Text>
    </Center>
  );
};
