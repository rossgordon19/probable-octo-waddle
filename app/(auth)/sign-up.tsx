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
    <SafeAreaView className="bg-white text-black flex-1">
      <ScrollView>
        <View className="flex-1 items-center justify-center w-full">
          <Image
            source={images.logo}
            className="h-[150px] w-auto"
            resizeMode="contain"
          />
          <View className="w-full px-4 mt-10">
            <Text className="text-2xl font-semibold text-left">
              Sign Up to FixIt
            </Text>

            <FormField
              title="Username"
              value={username}
              handleChangeText={setUsername}
              otherStyles="mt-10"
              autoCapitalize="none"
            />

            <FormField
              title="Email"
              value={email}
              handleChangeText={setEmail}
              otherStyles="mt-7"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <FormField
              title="Password"
              value={password}
              handleChangeText={setPassword}
              otherStyles="mt-7"
            />
          </View>
          <CustomButton
            title="Sign Up"
            handlePress={signUp}
            containerStyles="w-[92%] bg-blue-600 mt-4"
            isLoading={loading}
          />
        </View>
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg font-pregular">Have an account already?</Text>
          <Link
            href="/sign-in"
            className="text-lg font-psemibold text-blue-600"
          >
            Sign In
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
