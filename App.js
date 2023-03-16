import React, { useState } from "react";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";
import * as Fonts from "expo-font";
import { SafeAreaView } from "react-native";

const getFonts = () => {
  return Fonts.loadAsync({
    "nunito-regular": require("./assets/fonts/NotoSerif-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/NotoSerif-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={() => {
          setFontsLoaded(true);
        }}
      />
    );
  }
}
