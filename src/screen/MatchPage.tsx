import { Box, Image } from "@gluestack-ui/themed";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { LayoutBg } from "../Layout/LayoutBg";
import { Text } from "@gluestack-ui/themed";
import { ImageLogo } from "../components/Image";
import { AntDesign } from "@expo/vector-icons";
export const MatchPage = ({ navigation }: any) => {
  return (
    <View style={{ width: "100%", height: "100%", minHeight: "100%" }}>
      <LayoutBg>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          w={"100%"}
          h={"5%"}
          mt={45}
          px={10}
        >
          <ImageLogo alt="logo" size={"lg"}></ImageLogo>

          <Box>
            <TouchableOpacity
              style={{ paddingRight: 20 }}
              onPress={() => navigation.navigate("Home")}
            >
              <AntDesign name="closecircle" size={24} color="black" />
            </TouchableOpacity>
          </Box>
        </Box>

        <Box display="flex"></Box>
      </LayoutBg>
    </View>
  );
};
