import * as ImagePicker from "expo-image-picker"; // Import ImagePicker for camera functionality

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

// Define the Message type for consistency and clarity
type Message = {
  id: number;
  text: string;
  sender: "AI" | "user";
  timestamp?: string; // Optional timestamp for future use
};

const Handy: React.FC = () => {
  // State to manage chat messages
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there! I'm Handy, your go-to for all things DIY. Whether it's a quick fix or a big project, I'm here to help.",
      sender: "AI",
    },
  ]);
  const [input, setInput] = useState<string>(""); // Input state for the text input
  const [isTyping, setIsTyping] = useState<boolean>(false); // State to show typing indicator

  // OpenAI initialization with API key from environment variables
  const openai = new OpenAI({
    apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
  });

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (input.trim()) {
      // Create user message and update state
      const userMessage: Message = {
        id: messages.length + 1,
        text: input.trim(),
        sender: "user",
      };
      setMessages([...messages, userMessage]);
      setInput(""); // Clear input field
      setIsTyping(true); // Show typing indicator

      try {
        // Send message to OpenAI and receive response
        const response = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [{ role: "user", content: input.trim() }],
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        // Create AI message and update state
        const aiMessage: Message = {
          id: messages.length + 2,
          text:
            response.choices[0].message.content ||
            "Sorry, I couldn't generate a response.",
          sender: "AI",
        };
        setIsTyping(false); // Hide typing indicator
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        // Handle API errors
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

  // Function to launch the camera
  const handleLaunchCamera = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      // Launch the camera
      const result = await ImagePicker.launchCameraAsync();

      // Check if the operation was not canceled and the assets array exists
      if (!result.canceled && result.assets && result.assets.length > 0) {
        // Access the uri from the first asset in the array
        console.log("Image captured:", result.assets[0].uri);
      } else {
        console.log("Camera operation canceled");
      }
    } else {
      console.log("Camera permission denied");
    }
  };

  // Ref for managing fade animation on message bubbles
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Effect to trigger the fade animation whenever a new message is added
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [messages]);

  // Component for rendering individual message bubbles with animation
  const MessageBubble: React.FC<{ message: Message }> = ({ message }) => (
    <Animated.View
      style={{ opacity: fadeAnim, maxWidth: "70%", elevation: 5 }} // Apply fade-in animation and max width
      className={`mb-3 px-4 py-3 rounded-2xl ${
        message.sender === "AI"
          ? "bg-blue-100 self-start"
          : "bg-blue-600 self-end"
      } shadow-lg`}
    >
      <Text
        className={`text-base ${
          message.sender === "AI" ? "text-blue-900" : "text-white"
        }`}
      >
        {message.text}
      </Text>
    </Animated.View>
  );

  // Component for rendering a typing indicator with animation
  const TypingIndicator: React.FC = () => (
    <View className='flex-row space-x-2 self-start bg-blue-100 px-4 py-2 rounded-full shadow-lg'>
      <View className='w-2 h-2 bg-gray-500 rounded-full animate-pulse' />
      <View className='w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75' />
      <View className='w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150' />
    </View>
  );

  return (
    <SafeAreaView className='flex-1 bg-blue-50'>
      {/* KeyboardAvoidingView to prevent keyboard from covering input field */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className='flex-1'
      >
        {/* Main content container */}
        <View className='flex-1 space-y-4 p-5'>
          {/* Header */}
          <View className='flex-row justify-center items-center'>
            <Text className='text-2xl font-semibold text-blue-900'>
              HandyAI
            </Text>
          </View>

          {/* Message list container */}
          <ScrollView
            className='flex-1 bg-white px-4 py-6 rounded-3xl shadow-lg'
            contentContainerStyle={{ paddingBottom: 30 }}
          >
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
          </ScrollView>

          {/* Input and action buttons container */}
          <View className='flex-row items-center space-x-3 bg-white p-4 rounded-full shadow-lg'>
            <TextInput
              className='flex-1 p-3 text-lg bg-gray-100 rounded-full border border-gray-200'
              placeholder='Tap to reply...'
              value={input}
              onChangeText={setInput}
              multiline
              numberOfLines={1}
            />
            <TouchableOpacity onPress={handleLaunchCamera}>
              <Ionicons name='camera-outline' size={26} color='#2563EB' />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSendMessage}>
              <Ionicons name='send-outline' size={26} color='#2563EB' />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Handy;
