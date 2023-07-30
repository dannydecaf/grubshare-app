import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView>
            <Button
            title="Navigate to Register Screen"
            onPress={() => navigation.navigate("Register")}
            />
            <Button
            title="Navigate to Login Screen"
            onPress={() => navigation.navigate("Login")}
            />
        </SafeAreaView>
    );
}