import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrencyBtn from './CurrencyBtn';
import { currencyByRupee } from './constants';
export default function ProjectSixApp() {
  return (
    <SafeAreaView>
      <View style={styles.listContainer}>
      {currencyByRupee && currencyByRupee.map(({name,flag})=>(
        <CurrencyBtn name={name} flag={flag}/>
      ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listContainer:{}
})