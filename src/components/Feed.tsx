import React from "react";
import { Center } from "../Center";
import { FlatList } from "react-native-gesture-handler";
import faker from "faker/locale/ko";
import { Button } from "react-native";
import { HomeStackNavProps } from "../types/HomeParamList";
import { SearchStackNavProps } from "../types/SearchParamList";

interface FeedProps {
  navigation: any;
}

export const Feed: React.FC<FeedProps> = ({
  navigation,
}: HomeStackNavProps<"Feed">) => {
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item,
                });
              }}
            />
          );
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
};
