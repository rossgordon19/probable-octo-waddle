import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";

import CustomButton from "@/components/custom-button";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import FormField from "@/components/FormField";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Firebase Auth instance and navigation hook
  const auth = FIREBASE_AUTH;
  const router = useRouter();

  // Sign-in function to handle user login with Firebase Auth
  const signIn = async () => {
    // Set loading state to true during async operation
    setLoading(true);
    try {
      // Sign in the user with email and password
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);

      // Navigate to the Home screen upon successful sign-in
      router.replace("/home");
    } catch (error: any) {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);

      // Handle errors related to sign-in
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

      // Show error alert
      Alert.alert("Sign In Failed", errorMessage);
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className='bg-white flex-1'>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <View className='items-center'>
            {/* Logo */}
            <Image
              source={images.logo}
              className='h-[150px] w-auto mb-8'
              resizeMode='contain'
            />

            {/* Header */}
            <View className='w-full mb-12'>
              <Text className='text-3xl font-extrabold text-center text-gray-900'>
                Log into FixIt
              </Text>
            </View>

            {/* Form Fields */}
            <View className='w-full'>
              <FormField
                title='Email'
                value={email}
                handleChangeText={setEmail}
                otherStyles='mt-8'
                autoCapitalize='none'
              />
              <FormField
                title='Password'
                value={password}
                handleChangeText={setPassword}
                otherStyles='mt-8'
              />
            </View>

            {/* Sign In Button */}
            <CustomButton
              title='Sign In'
              handlePress={signIn}
              containerStyles='w-full bg-blue-500 py-4 rounded-full mt-8'
              textStyles='text-white'
              isLoading={loading}
            />
          </View>

          {/* Sign Up Link */}
          <View className='justify-center pt-6 flex-row gap-2'>
            <Text className='text-base font-medium text-gray-700'>
              Don't have an account?
            </Text>
            <Link
              href='/sign-up'
              className='text-base font-semibold text-blue-600'
            >
              Sign Up
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
