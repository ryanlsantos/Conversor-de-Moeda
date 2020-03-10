import React from "react";
import { StyleSheet, View } from "react-native";

import Conversor from "./src/components/Conversor";

export default function App() {
  return (
    <View style={styles.container}>
      <Conversor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
