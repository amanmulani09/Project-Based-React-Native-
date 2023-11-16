import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { passWordSchema } from './utils'
export default function ProjectThreeApp() {
  const [password,setPassword] = useState('');
  const [isPassGenerated,setIspassGenerated] = useState(false);

  const [lowerCase,setLowerCase] = useState(true);
  const [upperCase,setUpperCase] = useState(false);
  const [numbers,setNumbers] = useState(false);
  const [symbols,setSymbols] = useState(false);

  const generatePasswordString = function(length:number){
    //
  }

  const createPassword = function(characters:string,length:number){
//
  }

  const resetPassword = ()=>{
    //
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})