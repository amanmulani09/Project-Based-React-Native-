import React,{useState} from 'react';
import Cat from './src/components/Cat';
import {
View,
Text,
SafeAreaView,
TextInput,
Image,
Button
} from 'react-native'

type counterType = number;

const App = ():JSX.Element=>{
  const [counter,setCounter] = useState<counterType>(0)
  const [userText,setUserText] = useState<string>('')
  const handleOnPress = ()=>{
      setCounter(prev => prev + 1)
  }
return(
  <SafeAreaView>
    
  </SafeAreaView>
)
}

export default App;