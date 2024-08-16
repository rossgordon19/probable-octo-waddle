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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Import updateProfile

import CustomButton from "@/components/custom-button";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import FormField from "@/components/FormField";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;
  const router = useRouter();

  const validatePassword = (password: any) => {
    const minLength = /.{8,}/;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const number = /[0-9]/;

    if (!minLength.test(password)) {
      return "Password must be at least 8 characters long.";
    }
    if (!uppercase.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!lowercase.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!number.test(password)) {
      return "Password must contain at least one number.";
    }

    return null;
  };

  const signUp = async () => {
    const passwordError = validatePassword(password);
    if (passwordError) {
      Alert.alert("Password Requirements", passwordError);
      return;
    }

    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User Created:", response.user.uid);

      // Set the display name for the user
      await updateProfile(response.user, {
        displayName: name, // Use the name from the form
      });

      router.push("/sign-in");
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
            <Image
              source={images.logo}
              className='h-[150px] w-auto mb-8'
              resizeMode='contain'
            />
            <View className='w-full mb-12'>
              <Text className='text-3xl font-extrabold text-center text-gray-900'>
                Sign Up to FixIt
              </Text>
            </View>

            <View className='w-full'>
              <FormField
                title='Name'
                value={name}
                handleChangeText={setName}
                otherStyles='mt-8'
                autoCapitalize='none'
              />

              <FormField
                title='Email'
                value={email}
                handleChangeText={setEmail}
                otherStyles='mt-8'
                keyboardType='email-address'
                autoCapitalize='none'
              />

              <FormField
                title='Password'
                value={password}
                handleChangeText={setPassword}
                otherStyles='mt-8'
              />
            </View>

            <CustomButton
              title='Sign Up'
              handlePress={signUp}
              containerStyles='w-full bg-blue-500 py-4 rounded-full mt-8'
              textStyles='text-white'
              isLoading={loading}
            />
          </View>

          <View className='justify-center pt-6 flex-row gap-2'>
            <Text className='text-base font-medium text-gray-700'>
              Have an account already?
            </Text>
            <Link
              href='/sign-in'
              className='text-base font-semibold text-blue-600'
            >
              Sign In
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
