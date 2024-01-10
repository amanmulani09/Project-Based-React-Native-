import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import firstVector from '../assets/images/undraw_1.svg'
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
      <Text style={styles.headingUserDetailsText}>Welcome Back {userName}</Text>
      </View>
      </View>
      <View style={styles.mainImgContainer}>
        <Image
        style={styles.mainImg}
        source={
          {
            uri:'./assets/login_1.png'
          }
        }
        />
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  headerContainer:{
  flex:1
  },
  header:{
    flex:0,
    flexDirection:'row',
    height:'3%',
    // backgroundColor:'green'

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
    backgroundColor:'green'
  },
  mainImg:{
width:200,
height:400
  }
})