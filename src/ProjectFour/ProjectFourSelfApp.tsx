import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function ProjectFourSelfApp() {
    const [currentColor,setCurrentColor] = useState('whites')

    const [shapeColor,setShapeColors] = useState({
        first:'blue',
        second:'green',
        third:'pink',
        fourth:'gray',
        fifth:'red'
    })

    const handleClick = ()=>{
        const hexColor = '0123456789ABCDF';
        let colorFirst = '#'
        let colorSecond = '#'
        let colorThird = '#'
        let colorFourth = '#'
        let colorFifth = '#'
        for(let i=0; i<6; i++){
            colorFirst += hexColor[Math.floor(Math.random() * 16)]
            colorSecond += hexColor[Math.floor(Math.random() * 16)+2];
            colorThird += hexColor[Math.floor(Math.random() * 16)-2];
            colorFourth += hexColor[Math.floor(Math.random() * 16)+1];
            colorFifth += hexColor[Math.floor(Math.random() * 16)-1];
        }
        setShapeColors({
                first:colorFirst,
                second:colorSecond,
                third:colorThird,
                fourth:colorFourth,
                fifth:colorFifth
        });
    }

  return (
    <View style={[styles.container,{backgroundColor:currentColor}]}>
        <View style={styles.shapesContainer}>
            <View style={[styles.shapeFirst,styles.shape,{backgroundColor:shapeColor.first}]}></View>
            <View style={[styles.shapeSecond,styles.shape,{backgroundColor:shapeColor.second}]}></View>
            <View style={[styles.shapeThird,styles.shape,{backgroundColor:shapeColor.third}]}></View>
            <View style={[styles.shapeFourth,styles.shape,{backgroundColor:shapeColor.fourth}]}></View>
            <View style={[styles.shapeFifth,styles.shape,{backgroundColor:shapeColor.fifth}]}></View>
        </View>
        <SafeAreaView>
            <TouchableOpacity style={styles.btnPrimary} onPress={handleClick}>
                <Text style={styles.textPrimary}>Press Me</Text>
            </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.shapesContainer}>
            <View style={[styles.shapeFourth,styles.shape,{backgroundColor:shapeColor.fourth}]}></View>
            <View style={[styles.shapeSecond,styles.shape,{backgroundColor:shapeColor.second}]}></View>
            <View style={[styles.shapeFifth,styles.shape,{backgroundColor:shapeColor.fifth}]}></View>
            <View style={[styles.shapeThird,styles.shape,{backgroundColor:shapeColor.third}]}></View>
            <View style={[styles.shapeFirst,styles.shape,{backgroundColor:shapeColor.first}]}></View>
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
        justifyContent:'space-evenly',
        alignItems:'flex-end',
        flexWrap:'wrap',
        paddingHorizontal:10
    },
    shape:{
        marginHorizontal:20,
        marginVertical:10
    },
    shapeFirst:{
            width:100,
            height:100,
            alignSelf:'center'
    },
    shapeSecond:{
        width:70,
        height:70,
        borderRadius:70/2,
    },
    shapeThird:{
        width:120,
        height:120,
        borderRadius:8,
    },
    shapeFourth:{
        width:100,
        height:100,
        borderRadius:16,
    },
    shapeFifth:{
        width:120,
        height:120,
        borderRadius:120/2,
    }
})