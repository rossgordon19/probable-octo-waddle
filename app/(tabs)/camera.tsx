import { Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Camera = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-center">CAMERA SCREEN</Text>
      </View>
    </SafeAreaView>
  );
};

export default Camera;
