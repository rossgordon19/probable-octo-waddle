import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Redirect, Tabs } from "expo-router";

import React from "react";
import { icons } from "../../constants";

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center justify-center gap-1'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='h-6 w-6'
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          // TODO: Add these
          // tabBarActiveBackgroundColor: "",
          // tabBarInactiveBackgroundColor: "",
          // tabBarStyle: {
          //   backgroundColor: "",
          //   borderTopWidth: 1,
          //   borderTopColor: "",
          //   height: 84,
          // },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name='Home'
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='camera'
          options={{
            title: "Camera",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.camera}
                color={color}
                name='Camera'
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='projects'
          options={{
            title: "Projects",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.hammer}
                color={color}
                name='Projects'
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name='Profile'
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
