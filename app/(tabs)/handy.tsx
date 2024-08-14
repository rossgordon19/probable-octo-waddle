import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import OpenAI from "openai";
import { SafeAreaView } from "react-native-safe-area-context";

const Handy = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! I'm Handy, your go-to for all things DIY. Whether it's a quick fix or a big project, I'm here to help.",
      sender: "AI",
    },
  ]);
  const [input, setInput] = useState("");

  const openai = new OpenAI({
    apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
  });

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: input.trim(),
        sender: "user",
      };
      setMessages([...messages, userMessage]);
      setInput("");

      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [{ role: "user", content: input.trim() }],
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          response_format: { type: "text" },
        });

        const aiMessage = {
          id: messages.length + 2,
          text:
            response.choices[0].message.content ||
            "Sorry, I couldn't generate a response.",
          sender: "AI",
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Error communicating with OpenAI API:", error);
        const errorMessage = {
          id: messages.length + 2,
          text: "Sorry, something went wrong. Please try again.",
          sender: "AI",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  const handleLaunchCamera = () => {
    console.log("Camera launched");
  };

  return (
    <SafeAreaView className='flex-1 bg-blue-50'>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className='flex-1'
      >
        <View className='flex-1 space-y-4 p-4'>
          <View className='flex-row justify-between items-center'>
            <Text className='text-3xl font-bold text-blue-900 text-center flex-1'>
              AI ASSISTANT
            </Text>
            <TouchableOpacity className='ml-4'>
              <Ionicons name='time-outline' size={28} color='#2563EB' />
            </TouchableOpacity>
          </View>

          <ScrollView
            className='flex-1 bg-white p-4 rounded-lg shadow-md'
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {messages.map((message) => (
              <View
                key={message.id}
                className={`mb-4 p-3 rounded-lg ${
                  message.sender === "AI"
                    ? "bg-blue-100 self-start"
                    : "bg-blue-600 self-end"
                } shadow-md`}
              >
                <Text
                  className={`text-lg ${
                    message.sender === "AI" ? "text-blue-900" : "text-white"
                  }`}
                >
                  {message.text}
                </Text>
              </View>
            ))}
          </ScrollView>

          <View className='flex-row items-center space-x-2 bg-white p-3 rounded-lg shadow-md'>
            <TextInput
              className='flex-1 p-2 text-lg bg-gray-100 rounded-lg border border-gray-300'
              placeholder='Ask me anything...'
              value={input}
              onChangeText={setInput}
              multiline
              numberOfLines={1}
            />
            <TouchableOpacity onPress={handleLaunchCamera}>
              <Ionicons name='camera' size={28} color='#2563EB' />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSendMessage}>
              <Ionicons name='send' size={28} color='#2563EB' />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Handy;
