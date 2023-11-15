import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const listData = [
        {
            id:1,
            name:'aman mulani',
            role:'Senior Frontend Engineer (Web & Mobile)',
            YOE:2,
            avatar:'https://amanmulani-personal-portfolio.netlify.app/assets/images/profile.jpeg'

        },
        {
            id:2,
            name:'Prathamesh Bhalke',
            role:'Senior Frontend Engineer',
            YOE:1,
            avatar:'https://avatars.githubusercontent.com/u/98319826?v=4'

        },
        {
            id:3,
            name:'Ganesh Nagargoje',
            role:'Full-Stack developer',
            YOE:0.6,
            avatar:'https://media.licdn.com/dms/image/D4D03AQEkeDPRIvMOww/profile-displayphoto-shrink_400_400/0/1670469656818?e=1703721600&v=beta&t=Y4AkgRqMxFd7lVTN9vugPQe4n_LbTWR9gsYGGlIsjjQ'

        },
        {
            id:4,
            name:'Nilesh Aage',
            role:'AI Researcher',
            YOE:2,
            avatar:'https://media.licdn.com/dms/image/D4D03AQEy7PO6bVM4sQ/profile-displayphoto-shrink_400_400/0/1679035520794?e=1701907200&v=beta&t=5E8xCpOmxABLtfxiEQG-1y9Ve5k-MSlsHdB1TD0tgnA'

        },
        {
            id:5,
            name:'Himanshu Atkaan',
            role:'Senior Frontend Engineer (Web & UX)',
            YOE:4,
            avatar:'https://media.licdn.com/dms/image/D4D03AQGSlslvvPgnew/profile-displayphoto-shrink_800_800/0/1666718414839?e=2147483647&v=beta&t=Cmft7zOkp8nb5DjmGSlVpuQCM4BAyNzDH5vVuUXut5s'
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
            {listData.map(({id,name,role,YOE,avatar})=>(
                <View key={id} style={styles.userCard}>
                    <Image 
                        source={{
                            uri:avatar
                        }}
                        style={styles.userImage}
                    />
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userRole}>{role} <Text style={styles.userYOE}>-{YOE} Years</Text></Text>
                </View>
            ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    container:{},
    userCard:{},
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2
    },
    userName:{},
    userRole:{},
    userYOE:{}
})