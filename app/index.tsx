import { Image, Text, View } from "react-native";

import CustomButton from "@/components/custom-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-white flex-1">
      {/* Top Section: Logo and Text */}
      <View className="flex-1 items-center justify-center px-6">
        <Image
          source={images.logo}
          className="h-[150px] w-auto mb-8"
          resizeMode="contain"
        />
        <View className="w-full mb-12">
          <Text className="text-3xl font-extrabold text-center text-gray-900">
            DIY with Confidence
          </Text>
          <Text className="text-lg font-medium text-center text-gray-500 mt-2">
            Prototype MVP
          </Text>
        </View>
      </View>

      {/* Bottom Section: Buttons */}
      <View className="px-6 pb-10">
        <View className="mb-4">
          <CustomButton
            title="Get Started"
            handlePress={() => router.push("/sign-up")}
            containerStyles="w-full bg-blue-500 py-4 rounded-full"
            textStyles="text-white"
          />
        </View>
        <View>
          <CustomButton
            title="Log In"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full border border-blue-500 py-4 rounded-full"
            textStyles="text-blue-500"
          />
        </View>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
