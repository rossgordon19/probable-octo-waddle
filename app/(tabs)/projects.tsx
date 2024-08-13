import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Projects = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-50 p-4">
      <View className="flex-1 space-y-6">
        <Text className="text-3xl font-bold text-blue-900 text-center">
          PROJECTS
        </Text>
        
        <ScrollView className="flex-1 space-y-4">
          <View className="p-4 bg-blue-100 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-blue-900">
              Ongoing Projects
            </Text>
            <Text className="text-blue-700 mt-2">
              List or grid view of ongoing projects with options to view, edit, or mark as complete.
            </Text>
          </View>

          <View className="p-4 bg-blue-100 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-blue-900">
              Completed Projects
            </Text>
            <Text className="text-blue-700 mt-2">
              Archived projects that have been completed, accessible for reference.
            </Text>
          </View>

          <View className="p-4 bg-blue-100 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-blue-900">
              Project Details
            </Text>
            <Text className="text-blue-700 mt-2">
              Tap on a project to view detailed steps, photos, notes, and track progress.
            </Text>
          </View>

          <View className="p-4 bg-blue-100 rounded-lg shadow-md">
            <Text className="text-xl font-semibold text-blue-900">
              Progress Tracker
            </Text>
            <Text className="text-blue-700 mt-2">
              Visual representation of the progress made in each project.
            </Text>
          </View>
        </ScrollView>

        <TouchableOpacity className="w-full bg-blue-600 py-4 rounded-lg mt-4">
          <Text className="text-xl font-semibold text-white text-center">
            Add New Project
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Projects;
