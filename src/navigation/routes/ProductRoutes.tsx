import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../../AuthProvider";
import { Text } from "react-native";
import { Product } from "../../components/Product";
import { EditProduct } from "../../components/EditProduct";
import { StackNavigationState, TypedNavigator } from "@react-navigation/native";
import { HomeParamList } from "../../types/HomeParamList";
import { SearchParamList } from "../../types/SearchParamList";

export const ProductRoute = (
  Stack: TypedNavigator<
    HomeParamList | SearchParamList,
    StackNavigationState,
    any,
    any,
    any
  >
) => {
  return (
    <>
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `edit:${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                route.params.submit.current();
              }}
              style={{ paddingRight: 8 }}
            >
              <Text>Done</Text>
            </TouchableOpacity>
          ),
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `product: ${route.params.name}`,
        })}
        name="Product"
        component={Product}
      />
    </>
  );
};
