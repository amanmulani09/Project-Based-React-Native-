import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
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
      <SafeAreaView>
        <View style={styles.container}>
        <Text>Hello</Text>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'red'
}
});
