import TrackPlayer, { Event } from "react-native-track-player";
import { playListData } from "./src/ProjectEight/constants";

export async function setupPlayer(){
    let isSetup = false;
    try{
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
    }catch(error){
        await TrackPlayer.setupPlayer();
    }finally{
        return isSetup;
    }
}

export async function playbackService(){

    TrackPlayer.addEventListener(Event.RemotePause,()=>{
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay,()=>{
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteNext,()=>{
        TrackPlayer.skipToNext()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious,()=>{
        TrackPlayer.skipToPrevious()
    })
}