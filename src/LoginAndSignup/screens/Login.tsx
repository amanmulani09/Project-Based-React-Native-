import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
const imgSrc = require('../assets/images/login_1.png')
const Login = () => {
  const userName = "amanmulani09"
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Login</Text>
        <Icon name='user' style={styles.headerIcon}/>
      </View>
      <View style={styles.headingUserDetails}>
      <Text style={styles.headingUserDetailsText}>Welcome back, {userName}</Text>
      </View>
      </View>
      <View style={styles.mainImgContainer}>
        <Image
        style={styles.mainImg}
        source={imgSrc}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.mobileNumberHeading}>Enter Your Mobile Number</Text>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  headerContainer:{
  flex:0,
  height:'10%'
  },
  header:{
    flex:0,
    flexDirection:'row',
    height:'30%'

  },
  headingText:{
    fontWeight:'bold',
    marginLeft:10,
    fontSize:16,
    marginRight:5
  },
  headerIcon:{
    marginTop:2,
    fontSize:15
  },
  headingUserDetails:{
   flex:1
  },
  headingUserDetailsText:{
    fontSize:12,
    color:'gray',
    fontWeight:'600',
    marginLeft:10
  },
  mainImgContainer:{
    flex:1
  },
  mainImg:{
  width:'95%',
  height:400,
  marginLeft:'2.5%'
  },
  inputContainer:{
flex:1,
marginTop:100,
marginLeft:'18%'
  },
  mobileNumberHeading:{
    fontSize:20,
    fontWeight:'bold',
    color:'#6A0DAD'
  }
})