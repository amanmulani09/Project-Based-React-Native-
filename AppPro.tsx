import React from 'react';

import {View,Text, SafeAreaView,StyleSheet,useColorScheme} from 'react-native';

function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    console.log(isDarkMode)
    return(
        <SafeAreaView style={styles.container}>
            <Text style={isDarkMode ? styles.darkModeText : styles.lightMode}>{isDarkMode ? 'darkMode' : 'lightMode'}</Text>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:'red'
    },
    darkModeText: {
        color:'white'
    },
    lightMode:{
        color:'black'
    }
})

export default AppPro;