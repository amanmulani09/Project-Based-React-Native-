import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react';

import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'

type DiceProp = PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice = ({imageUrl}:DiceProp):JSX.Element=>{
  return(
    <View style={styles.container}>
      <Image style={styles.diceImage}
      source={imageUrl}
      />
    </View>
  )
}

export default function ProjectFiveApp() {
  const [diceImage,setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = ()=>{
    let randomNumberBetweenOnetoSix = Math.floor(Math.random()*6)+1;

    switch(randomNumberBetweenOnetoSix){
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
    }
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap} style={styles.btnContainer}>
      <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  btnContainer:{
    flex:1
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
