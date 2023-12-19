import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'

import { setupPlayer,addTrack } from '../../musicPlayerService'
export default function ProjectEightApp() {
  const [isPlayerReady,setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if(isSetup){
      await addTrack();
    };
    setIsPlayerReady(isSetup)
  }

  useEffect(()=>{
    setup();
  },[]);

  if(!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator 
        
        />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Spotify</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})