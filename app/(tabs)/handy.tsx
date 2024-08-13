import { Text, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Handy = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-50 p-4">
      <View className="flex-1 space-y-6">
        <Text className="text-3xl font-bold text-blue-900 text-center">
          AI ASSISTANT
        </Text>
        
        <View className="w-full p-4 bg-blue-100 rounded-lg shadow-md">
          <TouchableOpacity className="w-full bg-blue-600 py-4 rounded-lg">
            <Text className="text-xl font-semibold text-white text-center">
              Launch Camera
            </Text>
          </TouchableOpacity>
        </View>
        
        <View className="w-full p-4 bg-blue-100 rounded-lg shadow-md">
          <Text className="text-xl font-semibold text-blue-900">
            Describe Your Project/Problem
          </Text>
          <TextInput
            className="mt-2 p-2 bg-white rounded-lg shadow-sm"
            placeholder="Enter details here..."
            multiline
            numberOfLines={4}
          />
        </View>
        
        <View className="w-full p-4 bg-blue-100 rounded-lg shadow-md">
          <Text className="text-xl font-semibold text-blue-900">
            AI Suggestions/Instructions
          </Text>
          <Text className="text-blue-700 mt-2">
            After analysis, the AI provides a list of steps, tools, and materials needed here.
          </Text>
        </View>
        
        <View className="w-full p-4 bg-blue-100 rounded-lg shadow-md">
          <Text className="text-xl font-semibold text-blue-900">
            Project History
          </Text>
          <Text className="text-blue-700 mt-2">
            Previous interactions or projects managed through the AI will appear here.
          </Text>
        </View>
        
        <View className="w-full p-4 bg-blue-100 rounded-lg shadow-md">
          <TouchableOpacity className="w-full bg-blue-600 py-4 rounded-lg">
            <Text className="text-xl font-semibold text-white text-center">
              Connect with a Professional
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Handy;
