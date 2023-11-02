import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
export default class ElevatedCards extends Component {
  render() {
    return (
      <View>
        <View>
        <Text style={styles.headingText}>Card</Text>
        </View>
          <ScrollView style={styles.container} horizontal={true}>

            <View style={styles.card}>
                  <Text>Scroll</Text>
            </View>

            <View style={styles.card}>
                  <Text>Me</Text>
            </View>

            <View style={styles.card}>
                  <Text>To</Text>
            </View>

            <View style={styles.card}>
                  <Text>See</Text>
            </View>

            <View style={styles.card}>
                  <Text>More...</Text>
            </View>

            <View style={styles.card}>
                  <Text>🥰</Text>
            </View>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    margin:10
  },
  container:{
    padding:10
  },
  card:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:100,
    margin:10,
    backgroundColor:'wheat'
  }
})