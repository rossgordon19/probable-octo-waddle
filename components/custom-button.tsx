import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import React from "react";

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles?: any;
  textStyles?: StyleProp<TextStyle>;
  isLoading?: boolean;
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={containerStyles}
      className={`rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}      disabled={isLoading}
    >
      <Text
        style={textStyles}
        className='font-psemibold text-lg text-white' 
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;