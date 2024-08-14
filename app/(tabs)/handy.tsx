import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

const Handy = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", sender: "AI" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { id: messages.length + 1, text: input.trim(), sender: "user" };
      setMessages([...messages, newMessage]);
      setInput("");
      // Here, you would also send the message to the LLM and handle the response.
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 space-y-4 p-4">
          <Text className="text-3xl font-bold text-blue-900 text-center">
            AI ASSISTANT
          </Text>

          <ScrollView className="flex-1 bg-white p-4 rounded-lg shadow-md">
            {messages.map((message) => (
              <View
                key={message.id}
                className={`mb-4 p-3 rounded-lg ${
                  message.sender === "AI" ? "bg-blue-100 self-start" : "bg-blue-600 self-end"
                }`}
              >
                <Text
                  className={`text-lg ${
                    message.sender === "AI" ? "text-blue-900" : "text-black"
                  }`}
                >
                  {message.text}
                </Text>
              </View>
            ))}
          </ScrollView>

          <View className="flex-row items-center space-x-2 bg-white p-3 rounded-lg shadow-md">
            <TextInput
              className="flex-1 p-2 text-lg bg-gray-100 rounded-lg"
              placeholder="Type your message..."
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity onPress={handleSendMessage}>
              <Ionicons name="send" size={24} color="#2563EB" />
            </TouchableOpacity>
          </View>

          <View className="mt-4 w-full">
            <TouchableOpacity className="w-full bg-blue-600 py-4 rounded-lg flex-row justify-center items-center">
              <Ionicons name="camera" size={24} color="white" />
              <Text className="text-xl font-semibold text-white text-center ml-2">
                Launch Camera
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Handy;
