import { Alert, Image, ScrollView, Text, View } from "react-native"; // Added Alert import
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
      console.log(response);
      Alert.alert("Success", "Account Created!"); // Use Alert.alert instead of alert
    } catch (error: any) {
      console.log(error);
      Alert.alert("Sign Up Failed", error.message); // Use Alert.alert instead of alert
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
              Sign Up to FixIt
            </Text>

            <FormField
              title='Username'
              value={username}
              handleChangeText={setUsername}
              otherStyles='mt-10'
            />

            <FormField
              title='Email'
              value={email}
              handleChangeText={setEmail}
              otherStyles='mt-7'
              keyboardType='email-address'
            />

            <FormField
              title='Password'
              value={password}
              handleChangeText={setPassword}
              otherStyles='mt-7'
            />
          </View>
          <CustomButton
            title='Sign Up'
            handlePress={signUp}
            containerStyles='w-[92%] bg-blue-600 mt-4'
            isLoading={loading}
          />
        </View>
        <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg font-pregular'>
            Have an account already?
          </Text>
          <Link
            href='/sign-in'
            className='text-lg font-psemibold text-blue-600'
          >
            Sign In
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;