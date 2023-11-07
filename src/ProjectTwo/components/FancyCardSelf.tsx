import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'

export default function FancyCardSelf({cardTitle}:{cardTitle:string}) {
    return (
        <View>
          <Text style={styles.headingText}>{cardTitle}</Text>
        <ScrollView horizontal={true}>
          <View style={[styles.card,styles.cardElevated]}>
            <Image
            source={{
                uri:'https://hippie-inheels.com/wp-content/uploads/2021/07/CalanguteBeachOpening.jpeg'
            }}
            style={styles.cardImage}
            alt='nature image'
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>🗺️ Agonda</Text>
                <Text style={styles.cardLabel}>📍 Goa</Text>
                <Text style={styles.cardDesc}>📝 Agonda Beach at goa is a very beautiful place to visit</Text>
                <Text style={styles.cardDesc}>⏳ 12 Minutes Away</Text>
            </View>
          </View>
          <View style={[styles.card,styles.cardElevated]}>
            <Image
            source={{
                uri:'https://media.istockphoto.com/id/157579910/photo/the-beach.jpg?s=612x612&w=0&k=20&c=aMk67AmzIVD_S1Nibww8ytUdyub2ck3HNQ3uTvuPWPI='
            }}
            style={styles.cardImage}
            alt='nature image'
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>🗺️ Agonda</Text>
                <Text style={styles.cardLabel}>📍 Goa</Text>
                <Text style={styles.cardDesc}>📝 Agonda Beach at goa is a very beautiful place to visit</Text>
                <Text style={styles.cardDesc}>⏳ 12 Minutes Away</Text>
            </View>
          </View>
          <View style={[styles.card,styles.cardElevated]}>
            <Image
            source={{
                uri:'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/08/16/Pictures/_dbca9ffa-a138-11e8-9345-8d51f8ed9678.jpg'
            }}
            style={styles.cardImage}
            alt='nature image'
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>🗺️ Agonda</Text>
                <Text style={styles.cardLabel}>📍 Goa</Text>
                <Text style={styles.cardDesc}>📝 Agonda Beach at goa is a very beautiful place to visit</Text>
                <Text style={styles.cardDesc}>⏳ 12 Minutes Away</Text>
            </View>
          </View>
        </ScrollView>


        </View>
      )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        padding:5,
        fontWeight:'bold',
        marginBottom:10
    },
    card:{
        padding:20,
        shadowColor:'#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    cardElevated:{},
    cardImage:{
        height:180
    },
    cardBody:{
        marginTop:20
    },
    cardTitle:{
        marginTop:10
    },
    cardLabel:{
        marginTop:10
    },
    cardDesc:{
        marginTop:10,
        marginBottom:10
    },
    cardFooter:{
        marginTop:10
    }
})