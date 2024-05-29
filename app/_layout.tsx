import { Suspense } from "react";
import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import { Error } from "@/component/Error/Error";
import { Loading } from "@/component/Loading/Loading";
import { ErrorBoundary } from "react-error-boundary";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <Slot />
        </Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
}
