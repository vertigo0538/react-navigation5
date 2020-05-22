import React, { useState } from "react";
import { Center } from "../Center";
import { Text, Button, FlatList } from "react-native";
import { Feed } from "../components/Feed";
import faker from "faker";

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({ navigation }) => {
  const [show, setShow] = useState(false);
  return (
    <Center>
      <Text>Search</Text>
      <Button title="Search Product" onPress={() => setShow(true)} />
      {show ? <Feed navigation={navigation} /> : null}
      {/* {show ? (
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
      ) : null} */}
    </Center>
  );
};
