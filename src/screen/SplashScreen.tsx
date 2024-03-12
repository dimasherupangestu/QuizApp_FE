import { Box, Image, ImageBackground } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

export const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/Image/tes.png")}
      >
        <Box flex={1} justifyContent="center" alignItems="center">
          <Image
            source={require("../../assets/Image/logo.png")}
            width={300}
            height={300}
          ></Image>
        </Box>
      </ImageBackground>
    </View>
  );
};
