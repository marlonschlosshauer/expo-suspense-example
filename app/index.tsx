import { StyleSheet, TextInput, View } from "react-native";
import { Suspense, useState } from "react";
import { Pokemon } from "@/component/Pokemon/Pokemon";
import { ErrorBoundary } from "react-error-boundary";
import { Loading } from "@/component/Loading/Loading";
import { Error } from "@/component/Error/Error";

export default function Index() {
  const [name, setName] = useState<string | null>(null);
  return (
    <View style={Style.container}>
      <TextInput
        style={Style.input}
        placeholder="Ditto"
        autoComplete="off"
        autoCorrect={false}
        onSubmitEditing={(e) => {
          console.log(e);
          setName(e.nativeEvent.text.trim().toLowerCase());
        }}
      />
      {name && (
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <Pokemon name={name} />
          </Suspense>
        </ErrorBoundary>
      )}
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    gap: 12,
    marginHorizontal: 12,
  },
  input: {
    borderColor: "orange",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
