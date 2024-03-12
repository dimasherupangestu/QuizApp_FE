import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SplashScreen } from "./src/screen/SplashScreen";

import { Login } from "./src/screen/Login";
import { ChoseAvatar } from "./src/screen/ChoseAvatar";
import { Home } from "./src/screen/Home";
import { UpdateAvatar } from "./src/screen/UpdateAvatar";
import { ImageBackground } from "@gluestack-ui/themed";
import { LayoutBg } from "./src/Layout/LayoutBg";
import { View } from "react-native";
import { Diamond } from "./src/screen/Diamond";

export const Root = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ChoseAvatar"
          component={ChoseAvatar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UpdateAvatar"
          component={UpdateAvatar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Diamond"
          component={Diamond}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
