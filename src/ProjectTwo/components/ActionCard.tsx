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
            <Text numberOfLines={3}>ES6 Features You Need to Learn Before Jumping into React or any other JavaScript frontend framework. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum distinctio in ducimus quaerat autem molestiae nulla illo explicabo beatae optio.</Text>
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
    headingText:{},
    card:{},
    elevatedCard:{},
    headingContainer:{},
    headerText:{},
    cardImage:{
        height:100
    },
    cardBodyContainer:{},
    cardFooterContainer:{},
    socialLinks:{}
})