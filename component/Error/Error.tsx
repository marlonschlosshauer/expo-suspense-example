import { StyleSheet, Text, View } from "react-native";

export const Error = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.text}>An error occurred</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {},
  text: {
    fontSize: 24,
  },
});
