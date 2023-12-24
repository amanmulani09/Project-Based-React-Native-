import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
type detailProps = NativeStackScreenProps<RootStackParamList,'Details'>;

const Details = () => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}

export default Details

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