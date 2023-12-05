import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import Snackbar from 'react-native-snackbar';

//component
import CurrencyBtn from './CurrencyBtn';

//constansts
import { currencyByRupee } from './constants';
import { isNaN } from 'formik';

export default function ProjectSixApp() {

const [inputValue,setInputValue] = useState('');
const [resultValue,setResultValue] = useState('');
const [targetCurrency,setTargetCurrency] = useState('');

const buttonPressed = (targetValue:Currency)=>{

  if(!inputValue){
    return Snackbar.show({
      text:'Enter a Value to convert',
      backgroundColor:'#EA7773',
      textColor:'#000000'
    })
  }

  let inputAmount = parseFloat(inputValue);

  if(!isNaN(inputAmount)){
    let convertedValue = inputAmount * targetValue.value;
    let result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
    setResultValue(result);
    setTargetCurrency(targetValue.name)
  }else{
    return Snackbar.show({
      text:'Not a value to convert',
      backgroundColor:'#EA7773',
      textColor:'#000000'
    })
  }
}
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <View>
        <Text style={styles.inputCurrency}>₹</Text>
          </View>
          <View>
        <TextInput
        value={inputValue}
        onChangeText={value => setInputValue(value)}
        placeholder='please enter value to convert'
        style={styles.input}
        />
        </View>
        </View>
        <View style={styles.resultContainer}>
          <Text>{resultValue && resultValue}</Text>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  // backgroundColor:'gray',
  justifyContent:'center',
  alignItems:'center'
},
inputContainer:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  backgroundColor:'white',
  width:350,
  marginTop:20,
  paddingVertical:20,
  paddingHorizontal:20
},
inputCurrency:{
  fontSize:22,
  marginRight:5
},
input:{
padding:5,
borderWidth:1,
borderColor:'lightgray',
borderRadius:7,
width:200
},
resultContainer:{},

});
