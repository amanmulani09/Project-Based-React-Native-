import React from 'react'
import { View,Text, SafeAreaView, StyleSheet, Button,useColorScheme,Appearance} from 'react-native'
import { flexStyles } from './styles'
const FlexBoxPrac = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const handleDarkMode = ()=>{
      Appearance.setColorScheme( isDarkMode ? 'dark' : 'light')
  }
  return (
    // <SafeAreaView>

    <SafeAreaView style={isDarkMode ? styles.darkModeTheme : styles.lightModeTheme}>

      <View style={flexStyles.viewStyleOne}>
        <Text>Text1</Text>
      </View>

      <View style={flexStyles.viewStylTwo}>
        <Text>Text2</Text>
      </View>

      <View style={flexStyles.viewStyleThree}>
        <Text>Text3</Text>
      </View>

      <Button onPress={handleDarkMode}
      title={isDarkMode ? 'light' : 'dark'}
      color={isDarkMode ? 'white' : 'black'}
      />

    </SafeAreaView>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  darkModeTheme:{
    backgroundColor:'black'
  },
  lightModeTheme:{
    backgroundColor:'white'
  }
})


export default FlexBoxPrac