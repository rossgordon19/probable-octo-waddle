import { Redirect, Tabs } from "expo-router";
import { Text, View } from "react-native";

import React from "react";

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name='home' />
      </Tabs>
    </>
  );
};

export default TabsLayout;

