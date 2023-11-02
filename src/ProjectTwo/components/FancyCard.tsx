import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri:'https://hippie-inheels.com/wp-content/uploads/2021/07/CalanguteBeachOpening.jpeg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Agonda</Text>
            <Text style={styles.cardLabel}>Goa</Text>
            <Text style={styles.cardDesc}>Agonda Beach at goa is a very beautiful place to visit</Text>
            <Text style={styles.cardDesc}>12 Minutes Away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    card:{},
    cardElevated:{},
    cardImage:{
        height:180
    },
    cardBody:{},
    cardTitle:{},
    cardLabel:{},
    cardDesc:{},
    cardFooter:{}
})