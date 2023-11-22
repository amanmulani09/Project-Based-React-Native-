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
        <SafeAreaView>
            <TouchableOpacity style={styles.btnPrimary} onPress={handleClick}>
                <Text style={styles.textPrimary}>Press Me</Text>
            </TouchableOpacity>
        </SafeAreaView>
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
    }
})