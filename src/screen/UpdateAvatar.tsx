import {
  Avatar,
  AvatarImage,
  Box,
  HStack,
  Text,
  View,
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { AvatarDiamon, avatarReguler } from "../json/Avatar";
import { LayoutBg } from "../Layout/LayoutBg";
import { CradAvatar } from "../components/CradAvatar";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, ScrollViewBase, TouchableOpacity } from "react-native";

export const UpdateAvatar = ({ navigation }: any) => {
  return (
    <LayoutBg>
      <View
        width={"100%"}
        height={"100%"}
        minHeight={"$full"}
        position="relative"
      >
        <ScrollView>
          <Box position="absolute" top={10} left={10}>
            <TouchableOpacity
              style={{ position: "absolute", top: 50, left: 10 }}
              onPress={() => {
                navigation.navigate("home");
              }}
            >
              <HStack>
                <Ionicons name="arrow-back-sharp" size={30} color="black" />
                <Text fontWeight="bold" color="black" fontSize="$lg" mt={2}>
                  Back
                </Text>
              </HStack>
            </TouchableOpacity>
          </Box>

          <Box
            display="flex"
            mt={"$1/2"}
            flexWrap="wrap"
            width={"100%"}
            height={"auto"}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <HStack space={"sm"} mx={"auto"}>
              {avatarReguler.slice(0, 3).map((item) => (
                <CradAvatar
                  key={item.id}
                  avatar={item.avatar}
                  type={item.type}
                />
              ))}
            </HStack>

            <HStack space={"sm"} mx={"auto"}>
              {AvatarDiamon.slice(0, 3).map((item) => (
                <CradAvatar
                  key={item.id}
                  avatar={item.avatar}
                  type={item.type}
                  Diamon={item.Diamon}
                />
              ))}
            </HStack>
            {/*   
          {/* <HStack space={"sm"} mt={10} mx={"auto"}>
            <Box
              display="flex"
              w={120}
              height={160}
              mx={"auto"}
              overflow="hidden"
              borderRadius={"$xl"}
              borderWidth={2}
              borderColor={"#333"}
            >
              <LinearGradient
                colors={["#66D1FF", "#0C1620"]}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <Avatar size="xl" borderWidth={1} borderColor={"#333"} mt={10}>
                  <AvatarImage
                    source={require("../../assets/avatar/avatar2.jpg")}
                  />
                </Avatar>
                <Text color="white" mt={6} fontWeight="bold" fontSize="$xl">
                  Free
                </Text>
              </LinearGradient>
            </Box>
          </HStack> */}
          </Box>
        </ScrollView>
      </View>
    </LayoutBg>
  );
};
