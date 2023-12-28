import { StyleSheet, Text, View,SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { PRODUCTS_LIST } from '../../ProjectTen/data/constant'

import Seperator from '../components/Seperator'
import ProductItem from '../components/ProductItem'



const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.headingText}>Trending Products</Text>
          <FlatList
          data={PRODUCTS_LIST}
          ItemSeparatorComponent={Seperator}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=>(
            <Pressable>

            </Pressable>
          )
          }
          />
        </SafeAreaView>
      )
    }
    
    export default Home
    
    const styles = StyleSheet.create({
        container:{
        flex:1
        },
        headingText:{
            fontSize:25,
            fontWeight:'bold',
            margin:8
        }
    })