import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyBtnProps = PropsWithChildren<{
name:string,
flag:string
}>;

const CurrencyBtn = (props:CurrencyBtnProps):JSX.Element=>{
    return(
        <View style={styles.btnContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.countryName}>{props.name}</Text>
        </View>
    )
}
export default CurrencyBtn;

const styles = StyleSheet.create({
    btnContainer:{
        alignItems:'center'
    },
    flag:{
        fontSize:28,
        color:'#ffffff',
        marginBottom:4
    },
    countryName:{
        fontSize:14,
        color:'#FFA500',
        marginBottom:4
    }
})