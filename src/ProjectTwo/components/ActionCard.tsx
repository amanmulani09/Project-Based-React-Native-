import { StyleSheet, Text, View,Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    const openWebsite = (webSiteLink:string)=>{
            Linking.openURL(webSiteLink);
    }

  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}> What's new in javascript 2023?</Text>
        </View>
        <Image
        source={{
            uri:'https://miro.medium.com/v2/resize:fit:720/format:webp/0*tleLG0nr-AdhPP2M.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBodyContainer}>
            <Text style={styles.bodyText} numberOfLines={3}>ES6 Features You Need to Learn Before Jumping into React or any other JavaScript frontend framework. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum distinctio in ducimus quaerat autem molestiae nulla illo explicabo beatae optio.</Text>
        </View>
        <View style={styles.cardFooterContainer}>
         <TouchableOpacity onPress={()=> openWebsite('https://medium.com/@amanmulani/es6-features-you-need-to-learn-before-jumping-into-react-or-any-other-javascript-frontend-framework-c7164db30b8e')}>
            <Text style={styles.socialLinks}>Read More</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={()=> openWebsite('https://medium.com/@amanmulani')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        margin:5
    },
    card:{
        width:350,
        height:325,
        marginTop:10,
        backgroundColor:'black',
        marginHorizontal:20,
        borderRadius:8
    },
    elevatedCard:{},
    headingContainer:{
        padding:5
    },
    headerText:{
        fontStyle:'italic',
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5,
        color:'white',
        padding:5,
        textAlign:'center'
    },
    cardImage:{
        height:150,
        marginBottom:15
    },
    cardBodyContainer:{
        padding:5
    },
    bodyText:{
        color:'white'
    },
    cardFooterContainer:{
        marginTop:5,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        padding:5
    },
    socialLinks:{
        borderWidth:1,
        borderColor:'white',
        padding:5,
        borderRadius:7,
        backgroundColor:'white'
    }
})