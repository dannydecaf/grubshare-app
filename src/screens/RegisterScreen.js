import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";

export default function RegisterScreen({navigation}) {
  return (
    <SafeAreaView>
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