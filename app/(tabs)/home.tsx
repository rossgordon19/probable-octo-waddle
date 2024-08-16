import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, router } from "expo-router";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@/context/UserContext";

// Main Home Component
const Home: React.FC = () => {
  const { user } = useUser(); // User context to get the current user
  const unreadNotifications = 3; // Example notification count

  // State for simulating a to-do list
  const [tasks, setTasks] = useState([
    { id: 1, text: "Fix the Door Hinge", completed: true },
    { id: 2, text: "Paint the Living Room", completed: false },
    { id: 3, text: "Install New Light Fixtures", completed: false },
  ]);

  // Toggle the completion status of a task
  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        
        {/* Header Section */}
        <View className="flex-row items-center justify-between mt-4 px-4">
          {/* User Profile Icon */}
          <Link href="/profile">
            <Ionicons name="person-circle-outline" size={40} color="#1E40AF" />
          </Link>

          {/* Fix-It Logo */}
          <View className="flex-1 items-center">
            <Text className="text-xl font-bold text-blue-900 mr-4">Fix-It</Text>
          </View>

          {/* Notifications Icon with Badge */}
          <TouchableOpacity className="relative">
            <Ionicons name="notifications-outline" size={28} color="#1E40AF" />
            {unreadNotifications > 0 && (
              <View className="absolute -top-2 -right-2 bg-red-600 rounded-full h-5 w-5 items-center justify-center">
                <Text className="text-white text-xs">{unreadNotifications}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Quick Access Buttons */}
        <View className="flex-row justify-between mt-6 space-x-4 px-4">
          <TouchableOpacity className="flex-1 bg-white p-4 rounded-xl items-center shadow-lg">
            <Ionicons name="add-circle-outline" size={28} color="#1E40AF" />
            <Text className="mt-2 text-center text-blue-900">New Project</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-white p-4 rounded-xl items-center shadow-lg">
            <Ionicons name="time-outline" size={28} color="#1E40AF" />
            <Text className="mt-2 text-center text-blue-900">Recent Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-white p-4 rounded-xl items-center shadow-lg">
            <Ionicons name="heart-outline" size={28} color="#1E40AF" />
            <Text className="mt-2 text-center text-blue-900">Favorites</Text>
          </TouchableOpacity>
        </View>

        {/* Start Your Day Section */}
        <View className="mt-6 bg-white p-6 rounded-2xl shadow-lg mx-4">
          <Text className="text-2xl font-bold text-blue-900">Start Your Day</Text>
          <Text className="mt-2 text-blue-700">
            Need assistance with your projects? Talk to our AI assistant to get help with your tasks, advice on next steps, or just some quick insights.
          </Text>
          <TouchableOpacity
            className="mt-6 py-2 px-4 bg-blue-500 rounded-full items-center"
            onPress={() => router.push("/handy")}
          >
            <Text className="text-white font-semibold">Talk to AI for Help</Text>
          </TouchableOpacity>
        </View>

        {/* To-Do List Section */}
        <View className="mt-6 bg-white p-6 rounded-2xl shadow-lg mx-4">
          <Text className="text-2xl font-bold text-blue-900">To-Do List</Text>
          <View className="mt-4 space-y-3">
            {tasks.map((task) => (
              <TouchableOpacity
                key={task.id}
                onPress={() => toggleTaskCompletion(task.id)}
                className="flex-row items-center"
              >
                <Ionicons
                  name={task.completed ? "checkmark-circle" : "ellipse-outline"}
                  size={24}
                  color={task.completed ? "green" : "#1E40AF"}
                />
                <Text
                  className={`ml-3 text-blue-700 ${task.completed ? "line-through" : ""}`}
                >
                  {task.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Project Categories Section */}
        <View className="mt-6 bg-white p-6 rounded-2xl shadow-lg mx-4">
          <Text className="text-2xl font-bold text-blue-900">Project Categories</Text>
          <View className="mt-4 flex-row justify-between space-x-4">
            <TouchableOpacity className="bg-blue-50 p-4 rounded-xl items-center w-[100px] shadow-md">
              <Ionicons name="water-outline" size={28} color="#1E40AF" />
              <Text className="mt-2 text-center text-blue-900 text-sm">Plumbing</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue-50 p-4 rounded-xl items-center w-[100px] shadow-md">
              <Ionicons name="flash-outline" size={28} color="#1E40AF" />
              <Text className="mt-2 text-center text-blue-900 text-sm">Electrical</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue-50 p-4 rounded-xl items-center w-[100px] shadow-md">
              <Ionicons name="hammer-outline" size={28} color="#1E40AF" />
              <Text className="mt-2 text-center text-blue-900 text-sm">Carpentry</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Featured DIY Project Section */}
        <View className="mt-6 bg-white rounded-2xl shadow-lg mx-4 overflow-hidden">
          <Image
            source={require("../../assets/images/leak.png")}
            className="h-36 mt-6 w-full"
            resizeMode="contain"
          />
          <View className="p-6">
            <Text className="text-2xl font-bold text-blue-900">Fix a Leaky Faucet</Text>
            <Text className="text-gray-600 mt-2">
              Learn how to repair a common household issue with easy-to-follow steps.
            </Text>
            <Text className="text-gray-500 mt-4">
              A leaky faucet is a common problem in many homes. Fortunately, it's a simple fix that can be done with basic tools. In this article, we’ll guide you through the process step-by-step...
            </Text>
            <TouchableOpacity className="mt-6 py-2 px-4 bg-blue-500 rounded-full items-center">
              <Text className="text-white font-semibold">Read More</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;