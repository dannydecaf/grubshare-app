import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Form from '../components/Form'
import Title from '../components/Title'
import tw from 'tailwind-react-native-classnames'

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={tw`w-3/4`}>
            <Button
            title="Navigate to Register Screen"
            onPress={() => navigation.navigate("Register")}
            />
            <Button
            title="Navigate to Login Screen"
            onPress={() => navigation.navigate("Login")}
            />
            <Title text="Login" />
            <Form />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});