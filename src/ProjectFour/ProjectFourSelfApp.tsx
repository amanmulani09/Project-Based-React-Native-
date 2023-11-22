import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function ProjectFourSelfApp() {
    const [currentColor,setCurrentColor] = useState('yellow')

    const handleClick = ()=>{
        const hexColor = '0123456789ABCDF';
        let color = '#'
        for(let i=0; i<6; i++){
            color += hexColor[Math.floor(Math.random() * 16)]
        }
        setCurrentColor(color)
    }

  return (
    <View style={[styles.container,{backgroundColor:currentColor}]}>
        <View style={styles.shapesContainer}>
            <View style={styles.shapeFirst}></View>
        </View>
        <SafeAreaView>
            <TouchableOpacity style={styles.btnPrimary} onPress={handleClick}>
                <Text style={styles.textPrimary}>Press Me</Text>
            </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.shapesContainer}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnPrimary:{
        backgroundColor:'#800000',
        padding:10,
        borderRadius:7,
    },
    textPrimary:{
        color:'white',
        fontSize:22
    },
    shapesContainer:{
        backgroundColor:'white',
        marginVertical:10,
        flex:1,
        height:200,
        width:350,
    },
    shapeFirst:{
            width:100,
            height:100,
            borderColor:'black',
            borderWidth:1
    }
})