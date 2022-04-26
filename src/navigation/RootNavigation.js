import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Recipe } from '../screens';

import Tabs from "./tabs";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Login'} >
            <Stack.Screen
                name="Login"
                component={Login} />
            <Stack.Screen
                name="Main"
                component={Tabs} />
            <Stack.Screen
                name="Recipe"
                component={Recipe} />
        </Stack.Navigator>
  )
}

export default RootNavigation;