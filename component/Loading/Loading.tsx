import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const Loading = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.text}>Loading...</Text>
      <ActivityIndicator />
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
  },
});
