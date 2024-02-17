import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RealmProvider } from "@realm/react";
import { User } from "./models/User.jsx";

export default function App() {
  return (
    <RealmProvider schema={[User]}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </RealmProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
