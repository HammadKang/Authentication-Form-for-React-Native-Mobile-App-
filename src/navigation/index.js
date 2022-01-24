import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>

                <Stack.Screen name='Sign In' component={SignInScreen}/>
                <Stack.Screen name='Sign Up' component={SignUpScreen}/>
                <Stack.Screen name='Confirm E-mail' component={ConfirmEmailScreen}/>
                <Stack.Screen name='Forgot Password' component={ForgotPasswordScreen}/>
                <Stack.Screen name='New Password' component={NewPasswordScreen}/>
                <Stack.Screen name='Home' component={HomeScreen}/>



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;