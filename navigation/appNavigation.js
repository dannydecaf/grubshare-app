import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, RegisterScreen, LoginScreen } from '../screens';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
    
  }
