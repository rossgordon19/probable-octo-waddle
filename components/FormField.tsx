import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { icons } from "@/constants";

type FormFieldProps = {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles: any;
  keyboardType?: string;
  placeholder?: any;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType = "default",
  autoCapitalize = "sentences", // Default value if not provided
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-black font-pmedium'>{title}</Text>

      <View className='border border-gray-300 w-full h-16 px-4 bg-gray-100 rounded-2xl focus-within:border-blue-500 items-center flex-row'>
        <TextInput
          className='flex-1 font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor='#7b7b8b'
          secureTextEntry={title === "Password" && !showPassword}
          autoCapitalize={autoCapitalize} 
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className="h-6 w-6" resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
