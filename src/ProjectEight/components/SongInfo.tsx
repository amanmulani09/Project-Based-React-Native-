import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Track } from 'react-native-track-player'

type songInfoProps = PropsWithChildren<{
    track:Track | null | undefined
}>

const SongInfo = ({track}:songInfoProps) => {
  // console.log('trackProp',track)
  return (
    <View style={styles.container}>
     <View>
        <Text style={styles.name}>{track?.title} </Text>
     </View>
     <View>
        <Text style={styles.artist}>{track?.artist} . {track?.album} </Text>
     </View>
    </View>
  )
}

export default SongInfo

const styles = StyleSheet.create({
    container: {
      width: '90%',
      marginTop: 18,
      flex:1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    name: {
      marginBottom: 8,
      textAlign: 'center',
  
      color: '#fff',
      fontSize: 24,
      fontWeight: '800',
    },
    artist: {
      color: '#d9d9d9',
      textAlign: 'center',
    },
  });