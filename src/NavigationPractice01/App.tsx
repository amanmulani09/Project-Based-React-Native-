import React from 'react'

//main navigation container to wrap all the navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//component screens to render
import Home from './screen/Home';
import Details from './screen/Details';

//type for passing the type of data to the params and the screens;
export type RootStackParamList = {
    Home:undefined;
    Details:{product:Product};
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                component={Home}
                name='Home'
                options={{
                    title:'Home'
                }}
            />
            <Stack.Screen
                component={Details}
                name='Details'
                options={{
                    title:'Details'
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App