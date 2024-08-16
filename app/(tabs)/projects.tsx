import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Projects: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-50 p-6">
      {/* Header Section */}
      <View className="items-center mb-8">
        <Text className="text-3xl font-semibold text-blue-900">My Projects</Text>
      </View>

      {/* Main Content Area */}
      <ScrollView className="flex-1 space-y-8">
        
        {/* In Progress Projects Section */}
        <View>
          <Text className="text-xl font-semibold text-blue-900 mb-4">
            In Progress
          </Text>

          <View className="p-4 bg-white rounded-xl shadow-lg">
            <Text className="text-lg font-medium text-blue-900">
              Kitchen Renovation
            </Text>
            <Text className="text-blue-700 mt-2">
              Remodeling the kitchen with new cabinets, countertops, and appliances.
            </Text>
            <Text className="mt-4 text-blue-500">Due Date: Oct 15, 2024</Text>
          </View>

          <View className="mt-4 p-4 bg-white rounded-xl shadow-lg">
            <Text className="text-lg font-medium text-blue-900">
              Bathroom Fixes
            </Text>
            <Text className="text-blue-700 mt-2">
              Fixing the leaky faucet and replacing old tiles.
            </Text>
            <Text className="mt-4 text-blue-500">Due Date: Nov 1, 2024</Text>
          </View>
        </View>

        {/* Completed Projects Section */}
        <View>
          <Text className="text-xl font-semibold text-blue-900 mb-4">
            Completed
          </Text>

          <View className="p-4 bg-gray-100 rounded-xl shadow-lg">
            <Text className="text-lg font-medium text-blue-900">
              Living Room Paint Job
            </Text>
            <Text className="text-blue-700 mt-2">
              Completed painting the living room with a fresh coat of paint.
            </Text>
            <Text className="mt-4 text-blue-500">Completed on: Aug 20, 2024</Text>
          </View>

          <View className="mt-4 p-4 bg-gray-100 rounded-xl shadow-lg">
            <Text className="text-lg font-medium text-blue-900">
              Garage Organization
            </Text>
            <Text className="text-blue-700 mt-2">
              Organized the garage with new shelves and storage units.
            </Text>
            <Text className="mt-4 text-blue-500">Completed on: Jul 30, 2024</Text>
          </View>
        </View>

        {/* Project Categories Section */}
        <View>
          <Text className="text-xl font-semibold text-blue-900 mb-4">
            Project Categories
          </Text>
          <View className="flex-row justify-between space-x-4">
            <TouchableOpacity className="bg-white p-4 rounded-xl items-center w-[100px] shadow-md">
              <Ionicons name="water-outline" size={28} color="#1E40AF" />
              <Text className="mt-2 text-center text-blue-900 text-sm">
                Plumbing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-4 rounded-xl items-center w-[100px] shadow-md">
              <Ionicons name="flash-outline" size={28} color="#1E40AF" />
              <Text className="mt-2 text-center text-blue-900 text-sm">
                Electrical
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-4 rounded-xl items-center w-[100px] shadow-md">
              <Ionicons name="hammer-outline" size={28} color="#1E40AF" />
              <Text className="mt-2 text-center text-blue-900 text-sm">
                Carpentry
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Add New Project Button */}
        <TouchableOpacity className="w-full bg-blue-600 py-4 rounded-full mt-8 shadow-lg">
          <Text className="text-lg font-medium text-white text-center">
            Add New Project
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Projects;