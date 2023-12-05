import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
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
    <StatusBar />
    <View>
      <Text>1</Text>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
