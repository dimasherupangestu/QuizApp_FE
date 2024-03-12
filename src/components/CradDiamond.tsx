import { Text } from "@gluestack-ui/themed";
import { Avatar, AvatarImage, Box, HStack } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { AvatarData } from "../json/Avatar";
import { Image } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { DiamonData } from "../json/Diamon";

export const CradDiamond = (props: DiamonData) => {
  return (
    <Box px={0}>
      <HStack mt={10} space={"md"}>
        <TouchableOpacity>
          <Box
            display="flex"
            w={114}
            minWidth={100}
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
              <Text textAlign="center" fontWeight="bold" color="#24FF00">
                {props.pcs}
              </Text>

              <Image
                source={props.img}
                alt="diamon"
                width={50}
                mt={5}
                height={50}
              ></Image>
              <HStack>
                <Text color="white" mt={6} fontWeight="bold" fontSize="$xl">
                  {props.price}
                </Text>
              </HStack>
            </LinearGradient>
          </Box>
        </TouchableOpacity>
      </HStack>
    </Box>
  );
};
