import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import React from "react";

export default function RegisterScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Navigate to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Navigate to Login Screen"
        onPress={() => navigation.navigate("Login")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },
});