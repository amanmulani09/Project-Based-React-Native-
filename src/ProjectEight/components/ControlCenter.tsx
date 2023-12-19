import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackPlayer, { usePlaybackState } from 'react-native-track-player'
import { playbackService } from '../../../musicPlayerService'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
 const ControlCenter = () => {
    const playBackState = usePlaybackState();

    //Skip to previous button
    const skipToPrevious = async()=>{
        await TrackPlayer.skipToPrevious();
    }

    //Skip to next button
    const skipToNext = async()=>{
        await TrackPlayer.skipToNext();
    }
    
    
  return (
    <View>
      <Text>ControlCenter</Text>
    </View>
  )
}
export default ControlCenter;
const styles = StyleSheet.create({})