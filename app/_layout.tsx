import { Slot, Stack } from "expo-router";
import { UserProvider, useUser } from "@/context/UserContext"; // Import the UserContext

import React from 'react';
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const { user, loading } = useUser(); // Get user and loading state from the context

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded && !loading) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error, loading]);

  if (!fontsLoaded || loading) {
    return null; // Show nothing until fonts are loaded and authentication state is resolved
  }

  return (
    <Stack>
      {user ? (
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      )}
    </Stack>
  );
};

// Wrapping RootLayout with UserProvider
export default function App() {
  return (
    <UserProvider>
      <RootLayout />
    </UserProvider>
  );
}
