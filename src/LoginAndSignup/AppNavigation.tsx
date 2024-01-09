import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//important navigation components
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//screens
import Login from './screens/Login'
import Signup from './screens/Signup'

export type RootStackParamList = {
    Login:undefined,
    Signup:undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={
          {
            headerShown:false
          }
        }>
            <Stack.Screen
            name='Login'
            
            component={Login}
            />
            <Stack.Screen
            name="Signup"
            component={Signup}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
