import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
//main component to add the navigation
import { NavigationContainer } from '@react-navigation/native'

//component to create the navigation based on selected navigation type
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//screens
import Home from './screen/Home'
import Details from './screen/Details'

//here is the type of the screens and the data they receive while navigating
export type RootStackParamList = {
Home:undefined,
Details:{product:Product}
}

//creating the Stack for navigation

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name='Home' 
            component={Home}
            options={{
                title:'Trending Products'
            }}
            />
            <Stack.Screen 
            name='Details' 
            component={Details}
            options={{
                title:'Products Details'
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
