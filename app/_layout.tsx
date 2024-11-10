import { SafeAreaView, Platform, StatusBar, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Instrument: require("@/assets/fonts/InstrumentSans-Regular.ttf"),
    InstrumentMedium: require("@/assets/fonts/InstrumentSans-Medium.ttf"),
    InstrumentSemiBold: require("@/assets/fonts/InstrumentSans-SemiBold.ttf"),
    InstrumentBold: require("@/assets/fonts/InstrumentSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
})
