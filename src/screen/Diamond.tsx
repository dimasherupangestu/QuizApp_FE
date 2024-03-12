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
import { CradDiamond } from "../components/CradDiamond";
import { DiamonData, DiamondJson } from "../json/Diamon";
import { Image } from "@gluestack-ui/themed";

export const Diamond = ({ navigation }: any) => {
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
            bg="red"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <HStack mt={10} space={"md"}>
              <TouchableOpacity>
                <Box
                  display="flex"
                  w={120}
                  minWidth={100}
                  height={150}
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

                      alignItems: "center",
                    }}
                  >
                    <Text textAlign="center" fontWeight="bold" color="#24FF00">
                      1000
                    </Text>

                    <Image
                      source={require("../../assets/diamon/diamon1.png")}
                      alt="diamon"
                      w={"100%"}
                      px={20}
                      h={60}
                      mt={5}
                    ></Image>
                    <HStack>
                      <Text
                        color="white"
                        mt={6}
                        fontWeight="bold"
                        fontSize="$xl"
                      >
                        20000
                      </Text>
                    </HStack>
                  </LinearGradient>
                </Box>
              </TouchableOpacity>
            </HStack>

            {/* 
            <HStack space={"sm"} mx={"auto"}>
              {AvatarDiamon.slice(0, 3).map((item) => (
                <CradAvatar
                  key={item.id}
                  avatar={item.avatar}
                  type={item.type}
                  Diamon={item.Diamon}
                />
              ))}
            </HStack> */}
          </Box>
        </ScrollView>
      </View>
    </LayoutBg>
  );
};
