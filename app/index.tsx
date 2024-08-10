import { Image, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";

import CustomButton from "@/components/custom-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView
        contentContainerStyle={{
          height: "100%"
        }}
      >
        <View className='flex items-center justify-center w-full'>
          <Image
            source={images.logo}
            className='h-[300px] mb-[75px] w-auto'
            resizeMode='contain'
          />
          <View className="bottom-[100px]">
            <Text className='text-2xl font-bold text-center mt-4'>
              DIY with Confidence
            </Text>
            <Text className='text-lg font-pregular text-center mt-4'>
              Empower Your Inner Handyman
            </Text>
            <Text className='text-sm font-pregular text-center mx-4 mt-4'>
            Get step-by-step DIY guidance for home repairs and renovations; snap a photo, let our AI assist, or connect with a professional.
            </Text>
          </View>
          <CustomButton
            title='Continue with Email'
            handlePress={() => router.push("/sign-in")}
            containerStyles='w-[92%] bg-black'
          />
          <CustomButton
            title='Sign In with Google'
            handlePress={() => router.push("/sign-in")}
            containerStyles='w-[92%] bg-blue-600 mt-4'
          />
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
