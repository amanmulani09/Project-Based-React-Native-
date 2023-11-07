import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type cardTitle = {
  cardTitle:string
}
export default function FancyCard({cardTitle}:cardTitle) {
  return (
    <View>
      <Text style={styles.headingText}>{cardTitle}</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri:'https://hippie-inheels.com/wp-content/uploads/2021/07/CalanguteBeachOpening.jpeg'
        }}
        style={styles.cardImage}
        alt='nature image'
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Agonda</Text>
            <Text style={styles.cardLabel}>Canacona, Goa</Text>
            <Text style={styles.cardDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, beatae. Agonda Beach at goa is a very beautiful place to visit</Text>
            <Text style={styles.cardFooter}>12 Minutes Away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize:24,
      fontWeight:'bold',
      paddingHorizontal:8
    },
    card:{
      width:350,
      height:360,
      borderRadius:6,
      marginVertical:12,
      marginHorizontal:16,
    },
    cardElevated:{
      backgroundColor:'#000000',
      elevation:3,
      shadowOffset:{
        width:1,
        height:1
      }
    },
    cardImage:{
        height:180,
        marginBottom:6,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
      flex:1,
      flexGrow:1,
      paddingHorizontal:12,
      justifyContent:'center'
    },
    cardTitle:{
      fontSize:21,
      fontWeight:'bold',
      color:'#FFFFFF',
      marginBottom:4,
    },
    cardLabel:{
      fontSize:14,
      color:'#FFFFFF',
      marginBottom:4
    },
    cardDesc:{
      fontSize:12,
      color:'#F5F5F5',
      marginBottom:12,
      marginTop:6,
      
    },
    cardFooter:{
      color:'#FFFFFF',
      fontSize:12,
      alignSelf:'flex-end'
    }
})