import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'

export default function RegisterScreen({navigation}) {
  return (
    <SafeAreaView>
    <Button
      title="Navigate to Home Screen"
      onPress={() => navigation.navigate("Home")}
    />
    <Button
      title="Navigate to Register Screen"
      onPress={() => navigation.navigate("Register")}
    />
  </SafeAreaView>
  )
}