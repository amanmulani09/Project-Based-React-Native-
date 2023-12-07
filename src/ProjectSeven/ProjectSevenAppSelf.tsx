import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function ProjectSevenAppSelf() {
    const [currentPlayer,setCurrentPlayer] = useState('X')
  return (
    <View style={styles.container}>
    <SafeAreaView>
    <View style={styles.headingContainer}>
    {currentPlayer && (
        <Text style={styles.playerInfo}>Player {currentPlayer}'s Turn</Text>
    )}
    </View>

    <View>
        
    </View>
    </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headingContainer:{
        backgroundColor:'gray',
        height:40,
        justifyContent:'center',
        marginTop:20,
        width:330,
        marginHorizontal:30
    },
    playerInfo:{
        textAlign:"center",
        fontWeight:'bold',
        color:'#FFFFFF'
    }
})