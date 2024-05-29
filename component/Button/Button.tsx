import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={Style.container}>
    <Text style={Style.text}>{title}</Text>
  </TouchableOpacity>
);

const Style = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    color: "black",
  },
});
