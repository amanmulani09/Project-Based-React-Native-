import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'

import { setupPlayer,addTrack } from '../../musicPlayerService'
import ControlCenter from './components/ControlCenter';
export default function ProjectEightApp() {
  const [isPlayerReady,setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if(isSetup){
      await addTrack();
    };
    console.log(isSetup);
    setIsPlayerReady(isSetup)
  }

  useEffect(()=>{
    setup();
  },[]);

  if(!isPlayerReady){
    console.log('player not ready')
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
   <ControlCenter />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})