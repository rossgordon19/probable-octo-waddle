import { Alert, Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "@/components/custom-button";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import FormField from "@/components/FormField";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { images } from "@/constants";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Created:", response.user.uid);
      Alert.alert("Success", "Account Created!", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } catch (error: any) {
      console.log("Error Code:", error.code);
      console.log("Error Message:", error.message);

      let errorMessage =
        "An error occurred while trying to create the account. Please try again.";

      if (error.code === "auth/email-already-in-use") {
        errorMessage =
          "This email is already in use. Please try signing in or use a different email.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage =
          "The email address is not valid. Please enter a valid email address.";
      } else if (error.code === "auth/weak-password") {
        errorMessage =
          "The password is too weak. Please enter a stronger password.";
      }

      Alert.alert("Sign Up Failed", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingHorizontal: 20 }}>
        <View className="items-center">
          <Image
            source={images.logo}
            className="h-[150px] w-auto mb-8"
            resizeMode="contain"
          />
          <View className="w-full mb-12">
            <Text className="text-3xl font-extrabold text-center text-gray-900">
              Sign Up to FixIt
            </Text>
          </View>

          <View className="w-full">
            <FormField
              title="Username"
              value={username}
              handleChangeText={setUsername}
              otherStyles="mt-8"
              autoCapitalize="none"
            />

            <FormField
              title="Email"
              value={email}
              handleChangeText={setEmail}
              otherStyles="mt-8"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <FormField
              title="Password"
              value={password}
              handleChangeText={setPassword}
              otherStyles="mt-8"
            />
          </View>

          <CustomButton
            title="Sign Up"
            handlePress={signUp}
            containerStyles="w-full bg-blue-500 py-4 rounded-full mt-8"
            textStyles="text-white"
            isLoading={loading}
          />
        </View>

        <View className="justify-center pt-6 flex-row gap-2">
          <Text className="text-base font-medium text-gray-700">
            Have an account already?
          </Text>
          <Link
            href="/sign-in"
            className="text-base font-semibold text-blue-600"
          >
            Sign In
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
