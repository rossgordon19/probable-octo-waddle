import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { FIREBASE_AUTH } from "@/firebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      router.replace("/sign-in");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50 p-6">
      {/* Header */}
      <View className="items-center mb-8">
        <Text className="text-3xl font-semibold text-blue-900">My Profile</Text>
      </View>

      {/* User Profile Section */}
      <ScrollView className="flex-1 space-y-8">
        <View className="p-6 bg-white rounded-xl shadow-lg flex-row items-center space-x-4">
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            className="w-24 h-24 bg-gray-300 rounded-full"
          />
          <View className="flex-1">
            <Text className="text-xl font-semibold text-blue-900">User Name</Text>
            <Text className="text-blue-700">user@example.com</Text>
            <TouchableOpacity className="mt-2">
              <Text className="text-blue-600 font-semibold">Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* App Settings */}
        <TouchableOpacity className="p-6 bg-white rounded-xl shadow-lg flex-row items-center space-x-4">
          <Ionicons name="settings-outline" size={28} color="#1E40AF" />
          <View className="flex-1">
            <Text className="text-lg font-semibold text-blue-900">App Settings</Text>
            <Text className="text-blue-700 mt-1">
              Adjust notifications, theme, and privacy settings.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Tutorials & Help */}
        <TouchableOpacity className="p-6 bg-white rounded-xl shadow-lg flex-row items-center space-x-4">
          <Ionicons name="help-circle-outline" size={28} color="#1E40AF" />
          <View className="flex-1">
            <Text className="text-lg font-semibold text-blue-900">Tutorials & Help</Text>
            <Text className="text-blue-700 mt-1">
              Access tutorials, FAQs, and customer support.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Connected Accounts */}
        <TouchableOpacity className="p-6 bg-white rounded-xl shadow-lg flex-row items-center space-x-4">
          <Ionicons name="link-outline" size={28} color="#1E40AF" />
          <View className="flex-1">
            <Text className="text-lg font-semibold text-blue-900">Connected Accounts</Text>
            <Text className="text-blue-700 mt-1">
              Manage linked accounts or switch between modes.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity
          className="w-full bg-red-600 py-4 rounded-full mt-8 shadow-lg items-center"
          onPress={handleLogout}
        >
          <Text className="text-lg font-semibold text-white">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
