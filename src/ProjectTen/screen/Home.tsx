import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//react navigation

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import ProductItem from '../components/ProductItem';
import Seperator from '../components/Seperator';
import { PRODUCTS_LIST } from '../data/constant';

type HomeProps = NativeStackScreenProps<RootStackParamList,"Home">
const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home

