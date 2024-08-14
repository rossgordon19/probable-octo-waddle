import { Button, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home: React.FC = () => {
  return (
    <SafeAreaView className='flex-1 bg-blue-50'>
      <View className='flex-1 justify-between p-4'>
        {/* Header */}
        <View className='items-center mt-6 mb-4'>
          <Text className='text-3xl font-bold text-blue-900'>HOME SCREEN</Text>
        </View>

        {/* Main Content */}
        <View className='flex-1 justify-evenly'>
          {/* Quick Actions Section */}
          <View className='w-full p-4 bg-blue-100 rounded-lg shadow-md'>
            <Text className='text-xl font-semibold text-blue-900 mb-2'>
              Quick Actions
            </Text>
            <View className='flex-row justify-between space-x-4'>
              <TouchableOpacity className='flex-1 bg-blue-200 p-2 rounded-lg items-center'>
                <Ionicons name='add-circle-outline' size={24} color='blue' />
                <Text className='text-blue-900'>New Project</Text>
              </TouchableOpacity>
              <TouchableOpacity className='flex-1 bg-blue-200 p-2 rounded-lg items-center'>
                <Ionicons name='cloud-upload-outline' size={24} color='blue' />
                <Text className='text-blue-900'>Upload</Text>
              </TouchableOpacity>
              <TouchableOpacity className='flex-1 bg-blue-200 p-2 rounded-lg items-center'>
                <Ionicons name='settings-outline' size={24} color='blue' />
                <Text className='text-blue-900'>Settings</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Featured Projects/Tips Section */}
          <View className='w-full p-4 bg-blue-100 rounded-lg shadow-md'>
            <Text className='text-xl font-semibold text-blue-900 mb-2'>
              Featured DIY Projects & Tips
            </Text>
            <View className='space-y-2'>
              <Text className='text-blue-700'>
                - Project A: Perfect your drywall repair skills
              </Text>
              <Text className='text-blue-700'>
                - Tip: 5 essential tools every DIYer needs
              </Text>
            </View>
          </View>

          {/* Recent Activity Section */}
          <View className='w-full p-4 bg-blue-100 rounded-lg shadow-md'>
            <Text className='text-xl font-semibold text-blue-900 mb-2'>
              Recent Activity
            </Text>
            <View className='space-y-2'>
              <Text className='text-blue-700'>- Edited Project B</Text>
              <Text className='text-blue-700'>
                - Uploaded files to Project C
              </Text>
              <Text className='text-blue-700'>
                - Completed task in Project D
              </Text>
            </View>
          </View>

          {/* Notifications/Alerts Section */}
          <View className='w-full p-4 bg-blue-100 rounded-lg shadow-md'>
            <Text className='text-xl font-semibold text-blue-900 mb-2'>
              Notifications & Alerts
            </Text>
            <View className='space-y-2'>
              <Text className='text-blue-700'>
                - You have 3 new notifications
              </Text>
              <Text className='text-blue-700'>- System update available</Text>
            </View>
          </View>

          {/* AI Assistant Prompt Section */}
          <View className='w-full p-4 bg-blue-100 rounded-lg shadow-md'>
            <Text className='text-xl font-semibold text-blue-900'>
              AI Assistant Prompt
            </Text>
            <Text className='text-blue-700 mt-2'>
              Need help? Ask [AI Name]. Get quick assistance anytime.
            </Text>
            <Button
              title='Ask AI'
              onPress={() => alert("AI Assistant Activated!")}
              color='#1E40AF'
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
