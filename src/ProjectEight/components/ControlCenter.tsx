import { Pressable, SafeAreaView, StyleSheet,Text,View } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import { playbackService } from '../../../musicPlayerService'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
 const ControlCenter = () => {
    const playerState = usePlaybackState();
    //Skip to previous button
    console.log(playerState)
    const skipToPrevious = async()=>{
        await TrackPlayer.skipToPrevious();
    }

    //Skip to next button
    const skipToNext = async()=>{
        await TrackPlayer.skipToNext();
    }

    const togglePlayBack = async (playback:State|any)=>{
        const currentTrack = TrackPlayer.getCurrentTrack();

        if(currentTrack !== null){

            if(playback === State.Paused || playback === State.Ready){
                await TrackPlayer.play();
            }else{
                await TrackPlayer.pause();
            }
        }
    }
    
  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Pressable onPress={skipToPrevious}>
        <Icon name="skip-previous" size={40} style={styles.icon}/>
      </Pressable>

      <Pressable onPress={()=> togglePlayBack(playerState)}>
        <Icon name={playerState.state === State.Playing ? "pause" : "play-arrow"} size={75} style={styles.icon}/>
      </Pressable>

      <Pressable onPress={skipToNext}>
        <Icon name="skip-next" size={40} style={styles.icon}/>
      </Pressable>
    </View>
    </SafeAreaView>
  )
}
export default ControlCenter;
const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderRightColor:'red'
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });