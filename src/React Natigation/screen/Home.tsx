import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type homeProps = NativeStackScreenProps<RootStackParamList,'Home'>;

const Home = ({navigation}:homeProps) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    smallText:{
        color:'#000000'
    }
})