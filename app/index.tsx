// ONBOARDING SCREEN
import { Image, ScrollView, Text, View } from "react-native";

import CustomButton from "@/components/custom-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className='bg-white text-black flex-1'>
      <ScrollView>
        <View className='flex-1 items-center justify-center w-full'>
          <Image
            source={images.logo}
            className='h-[150px] w-auto'
            resizeMode='contain'
          />
          <View className='w-full px-4 mt-10'>
            <Text className='text-2xl font-semibold text-center'>
              DIY with Confidence
            </Text>
            <Text className='text-lg font-pregular text-center mt-4'>
              Prototype MVP
            </Text>
          </View>
          <CustomButton
            title='Sign In'
            handlePress={() => router.push("/sign-in")}
            containerStyles='w-[92%] bg-blue-600 mt-4'
          />
          <CustomButton
            title='Sign Up'
            handlePress={() => router.push("/sign-up")}
            containerStyles='w-[92%] bg-black mt-4'
          />
        </View>
      </ScrollView>
      <StatusBar style='dark' />
    </SafeAreaView>
  );
}
