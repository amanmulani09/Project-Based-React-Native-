import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function ProjectFourSelfApp() {
    const [currentColor,setCurrentColor] = useState('yellow')

    const colors = ['green','blue','purple','black','white','salmon','gray','orange','red']
    const handleClick = ()=>{
        const randomColorIndex = Math.round(Math.random() * colors.length);
        // console.log(randomColorIndex);
        setCurrentColor(colors[randomColorIndex])
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