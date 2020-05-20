import React, { useState, useEffect, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./Screens/Login";
import { Register } from "./Screens/Register";
import { AuthParamList } from "./types/AuthParamList";
import { Center } from "./Center";
import { ActivityIndicator, AsyncStorage, Text } from "react-native";
import { AuthContext } from "./AuthProvider";
interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

export const Routes = () => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          login();
        }
        setLoading(false);
        console.log(userString);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? (
        <Center>
          <Text>로그인 되었습니다.</Text>
        </Center>
      ) : (
        <Stack.Navigator
          // screenOptions={{
          //   header: () => null,
          // }}
          initialRouteName="Login"
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: "Sign Up",
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerTitle: "Sign In",
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
