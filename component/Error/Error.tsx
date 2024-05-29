import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../Button/Button";

export const Error = () => {
  const onBack = () => router.replace("/");
  return (
    <View style={Style.container}>
      <Text style={Style.text}>An error occuared</Text>
      <Button title="Reload" onPress={onBack} />
    </View>
  );
};

const Style = StyleSheet.create({
  container: {},

  text: {
    fontSize: 24,
  },
});
