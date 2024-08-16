import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import OpenAI from "openai";
import { SafeAreaView } from "react-native-safe-area-context";

// Define the Message type
type Message = {
  id: number;
  text: string;
  sender: "AI" | "user";
  timestamp?: string; // Optional timestamp
};

const Handy: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there! I'm Handy, your go-to for all things DIY. Whether it's a quick fix or a big project, I'm here to help.",
      sender: "AI",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const openai = new OpenAI({
    apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
  });

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: input.trim(),
        sender: "user",
      };
      setMessages([...messages, userMessage]);
      setInput("");
      setIsTyping(true); // Show typing indicator

      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [{ role: "user", content: input.trim() }],
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        const aiMessage: Message = {
          id: messages.length + 2,
          text: response.choices[0].message.content || "Sorry, I couldn't generate a response.",
          sender: "AI",
        };
        setIsTyping(false); // Hide typing indicator
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Error communicating with OpenAI API:", error);
        const errorMessage: Message = {
          id: messages.length + 2,
          text: "Sorry, something went wrong. Please try again.",
          sender: "AI",
        };
        setIsTyping(false); // Hide typing indicator
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  const handleLaunchCamera = () => {
    console.log("Camera launched");
  };

  // Message bubble animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [messages]);

  // Updated MessageBubble component with fade-in animation and sleek design
  const MessageBubble: React.FC<{ message: Message }> = ({ message }) => (
    <Animated.View
      style={{ opacity: fadeAnim, maxWidth: "70%", elevation: 5 }} // Combined styles here
      className={`mb-3 px-4 py-3 rounded-2xl ${
        message.sender === "AI" ? "bg-blue-100 self-start" : "bg-blue-600 self-end"
      } shadow-lg`}
    >
      <Text className={`text-base ${message.sender === "AI" ? "text-blue-900" : "text-white"}`}>
        {message.text}
      </Text>
    </Animated.View>
  );

  // Sleeker Typing Indicator with animation
  const TypingIndicator: React.FC = () => (
    <View className="flex-row space-x-2 self-start bg-blue-100 px-4 py-2 rounded-full shadow-lg">
      <View className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
      <View className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75" />
      <View className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150" />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
        <View className="flex-1 space-y-4 p-5">
          <View className="flex-row justify-center items-center">
            <Text className="text-2xl font-semibold text-blue-900">HandyAI</Text>
          </View>

          <ScrollView className="flex-1 bg-white px-4 py-6 rounded-3xl shadow-lg" contentContainerStyle={{ paddingBottom: 30 }}>
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
          </ScrollView>

          <View className="flex-row items-center space-x-3 bg-white p-4 rounded-full shadow-lg">
            <TextInput
              className="flex-1 p-3 text-lg bg-gray-100 rounded-full border border-gray-200"
              placeholder="Tap to reply..."
              value={input}
              onChangeText={setInput}
              multiline
              numberOfLines={1}
            />
            <TouchableOpacity onPress={handleLaunchCamera}>
              <Ionicons name="camera-outline" size={26} color="#2563EB" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSendMessage}>
              <Ionicons name="send-outline" size={26} color="#2563EB" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Handy;
