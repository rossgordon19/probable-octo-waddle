import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { FIREBASE_AUTH } from "@/firebaseConfig";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      router.replace("/sign-in");  // Navigate back to sign-in screen
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50 p-4">
      <View className="flex-1 space-y-6">
        <Text className="text-3xl font-bold text-blue-900 text-center">
          PROFILE
        </Text>
        
        <ScrollView className="flex-1 space-y-4">
          <View className="p-4 bg-blue-100 rounded-lg shadow-md flex-row items-center space-x-4">
            <Image 
              source={{uri: 'https://via.placeholder.com/100'}} 
              className="w-24 h-24 bg-gray-300 rounded-full"
            />
            <View className="flex-1">
              <Text className="text-xl font-semibold text-blue-900">
                User Name
              </Text>
              <Text className="text-blue-700">
                user@example.com
              </Text>
              <TouchableOpacity className="mt-2">
                <Text className="text-blue-600 font-semibold">
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="p-4 bg-blue-100 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-blue-900">
              App Settings
            </Text>
            <Text className="text-blue-700 mt-2">
              Adjust notifications, theme (dark/light mode), and privacy settings.
            </Text>
          </View>

          <View className="p-4 bg-blue-100 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-blue-900">
              Tutorials & Help
            </Text>
            <Text className="text-blue-700 mt-2">
              Access to tutorials, FAQs, customer support, and feedback submission.
            </Text>
          </View>

          <View className="p-4 bg-blue-100 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-blue-900">
              Connected Accounts
            </Text>
            <Text className="text-blue-700 mt-2">
              Manage linked accounts (Google, Facebook) or switch between guest and registered modes.
            </Text>
          </View>
        </ScrollView>

        <TouchableOpacity 
          className="w-full bg-red-600 py-4 rounded-lg mt-4"
          onPress={handleLogout}
        >
          <Text className="text-xl font-semibold text-white text-center">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
