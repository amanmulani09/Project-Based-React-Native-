import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SongSlider = () => {
  return (
    <View>
      <Text>SongSlider</Text>
    </View>
  )
}

export default SongSlider

const styles = StyleSheet.create({
    sliderContainer: {
      width: 350,
      height: 40,
      marginTop: 25,
  
      flexDirection: 'row',
    },
    timeContainer: {
      width: 340,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    time: {
      color: '#fff',
    },
  });