import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "@/components/custom-button";
import FormField from "@/components/FormField";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

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
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyles='mt-10'
            />

            <FormField
              title='Email'
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles='mt-7'
              keyboardType='email'
            />

            <FormField
              title='Password'
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles='mt-7'
            />
          </View>
          <CustomButton
            title='Sign Up'
            handlePress={submit}
            containerStyles='w-[92%] bg-blue-600 mt-4'
            isLoading={isSubmitting}
          />
        </View>
        <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg font-pregular'>Have an account already?</Text>
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
