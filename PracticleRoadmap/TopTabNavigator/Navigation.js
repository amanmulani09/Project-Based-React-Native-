import * as React from 'react';
import {View,Text,Platform} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Home = ()=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'yellow'}}>
        <Text> Home </Text> 
    </View>
  )
} 
const Feeds = ()=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
        <Text> Feeds </Text> 
    </View>
  )
} 

const About = ()=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'green'}}>
        <Text> About </Text> 
    </View>
  )
} 

const Tab = createMaterialTopTabNavigator();
const Navigation = ()=>{

  return(
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }} style={{marginTop:Platform.OS === 'ios' ? 50 : 0}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Feeds" component={Feeds} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
  )
};

export default Navigation;