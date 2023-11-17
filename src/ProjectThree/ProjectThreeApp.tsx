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
    let charactersStr = ''
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numariChars = '1234567890';
    const specialChars = '!@#$%^&*()_?>+-_'

    charactersStr+= lowerCase ? lowerCaseChars : '';
    charactersStr+= upperCase ? upperCaseChars : '';
    charactersStr+= numbers ? numariChars : '';
    charactersStr+= symbols ? specialChars : '';

    const passwordResult = createPassword(charactersStr,length);
    setPassword(passwordResult);
    setIspassGenerated(true);
  }

  const createPassword = function(characters:string,length:number){
    let result = '';
    for(let i=0; i<length;i++){
      let randomCharIndex = Math.round(Math.random() * characters.length);
      result+= characters.charAt(randomCharIndex);
    }
    return result;
  }

  const resetPassword = ()=>{
    setPassword('');
    setIspassGenerated(false);
    setLowerCase(false);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})