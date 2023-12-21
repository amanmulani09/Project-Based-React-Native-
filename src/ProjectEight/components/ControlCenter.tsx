import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { playbackService } from '../../../musicPlayerService'

const ControlCenter = () => {

    const playBackState = usePlaybackState()
    // next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }
    // Previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async (playback: State | any) => {
        const  currentTrack = await TrackPlayer.getActiveTrackIndex()
        // console.log(currentTrack,'currentTrack')
        if (currentTrack !== null) {
          // console.log(playback)
            if (playback.state === State.Paused || playback.state === State.Ready) {
              console.log(playback,'playback 26')
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }
    console.log('32',playBackState)

  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon style={styles.icon} name="skip-previous" size={40} />
        </Pressable>
        <Pressable onPress={() => togglePlayback(playBackState)}>
            <Icon 
            style={styles.icon} 
            name={playBackState.state === State.Playing ? "pause" : "play-arrow"} 
            size={75} />
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon style={styles.icon} name="skip-next" size={40} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });

export default ControlCenter