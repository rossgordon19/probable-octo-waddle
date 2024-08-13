import { Alert, Image, ScrollView, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";

import CustomButton from "@/components/custom-button";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import FormField from "@/components/FormField";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;
  const router = useRouter();

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      // Navigate directly to the home screen after a successful sign-in
      router.replace("/home");
    } catch (error: any) {
      console.log("Error Code:", error.code);
      console.log("Error Message:", error.message);

      let errorMessage =
        "An error occurred while trying to sign in. Please try again.";

      if (error.code === "auth/invalid-credential") {
        errorMessage =
          "The credentials you entered are invalid. Please check your email and password and try again.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage =
          "No account found with this email. Please check your email or sign up for a new account.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage =
          "The password you entered is incorrect. Please try again.";
      }

      Alert.alert("Sign In Failed", errorMessage);
    } finally {
      setLoading(false);
    }
  };

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
            <Text className='text-2xl font-semibold text-left'>
              Log into FixIt
            </Text>

            <FormField
              title='Email'
              value={email}
              handleChangeText={setEmail}
              otherStyles='mt-7'
              autoCapitalize='none'
            />

            <FormField
              title='Password'
              value={password}
              handleChangeText={setPassword}
              otherStyles='mt-7'
            />
          </View>
          <CustomButton
            title='Sign In'
            handlePress={signIn}
            containerStyles='w-[92%] bg-blue-600 mt-4'
            isLoading={loading}
          />
        </View>
        <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg font-pregular'>Don't have an account?</Text>
          <Link
            href='/sign-up'
            className='text-lg font-psemibold text-blue-700'
          >
            Sign Up
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
