import { Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-50 p-4">
      <View className="flex-1 justify-center items-center space-y-6">
        <Text className="text-3xl font-bold text-blue-900">HOME SCREEN</Text>
        
        <View className="w-full p-4 bg-blue-100 rounded-lg shadow-md">
          <Text className="text-xl font-semibold text-blue-900">
            Quick Actions
          </Text>
        </View>
        
        <View className="w-full p-4 bg-blue-100 rounded-lg shadow-md">
          <Text className="text-xl font-semibold text-blue-900">
            Featured Projects/Tips
          </Text>
        </View>
        
        <View className="w-full p-4 bg-blue-100 rounded-lg shadow-md">
          <Text className="text-xl font-semibold text-blue-900">
            Recent Activity
          </Text>
        </View>
        
        <View className="w-full p-4 bg-blue-100 rounded-lg shadow-md">
          <Text className="text-xl font-semibold text-blue-900">
            Notifications/Alerts
          </Text>
        </View>
        
        <View className="w-full p-4 bg-blue-100 rounded-lg shadow-md">
          <Text className="text-xl font-semibold text-blue-900">
            AI Assistant Prompt
          </Text>
          <Text className="text-blue-700 mt-2">
            A section where users can quickly start interacting with the AI
            (e.g., “Need help? Ask [AI Name]”).
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
