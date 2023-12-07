import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { playerData } from './playerData'

const Square = (playerData:PlayerData):JSX.Element=>{
    return(
        <>
        <View style={styles.square}>
        <Text style={styles.playerName}> {playerData.markAs === "default" ? '' : playerData.markAs} </Text>
        </View>
        </>
    )
}
export default function ProjectSevenAppSelf() {
    const [currentPlayer,setCurrentPlayer] = useState('X');
    const [boardState,setBoardState] = useState(playerData);
    const handleActionPress = (player:PlayerData)=>{
        let updatedPlayerBoard = [...boardState].map(board => board.id === player.id ? {...board,markAs:currentPlayer}:board);
        setBoardState(updatedPlayerBoard);
        console.log(updatedPlayerBoard)
        // console.log(updatedPlayerBoard)
     
        setCurrentPlayer(currentPlayer => currentPlayer === "X" ? "O" : "X")
    }
    const handleReset = ()=>{
        setBoardState(playerData);
        setCurrentPlayer("X")
    }
  return (
    <View style={styles.container}>
    <SafeAreaView>
    <View style={styles.headingContainer}>
    {currentPlayer && (
        <Text style={styles.playerInfo}>Player {currentPlayer}'s Turn</Text>
    )}
    </View>

    <View style={styles.boardContainer}>
        <FlatList
        numColumns={3}
        data={boardState}
        keyExtractor={item => item.toString() + Math.random()*1000 + '__'}
        renderItem={({item})=>(
            <Pressable onPress={()=> handleActionPress(item)}>
                <Square {...item}/>
            </Pressable>
        )}
        />
    </View>

    <View style={styles.footerContainer}>
            <Pressable onPress={handleReset}><Text style={styles.resetText}>Reset</Text></Pressable>
    </View>
    </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headingContainer:{
        backgroundColor:'gray',
        height:40,
        justifyContent:'center',
        marginTop:20,
        width:330,
        marginHorizontal:30
    },
    playerInfo:{
        textAlign:"center",
        fontWeight:'bold',
        color:'#FFFFFF'
    },
    boardContainer:{
        margin:40
    },
    square:{
        width:100,
        height:100,
        borderWidth:1,
        borderColor:'gray',
        flex:1,
        justifyContent:'center'
    },
    playerName:{
        fontSize:40,
        textAlign:'center'
    },
    footerContainer:{
        borderWidth:1,
        borderBlockColor:'gray',
        height:40,
        justifyContent:'center',
        marginTop:10,
        width:330,
        marginHorizontal:30
    },
    resetText:{
        textAlign:'center',
        fontSize:22,
        marginTop:0,
        fontWeight:'bold',
        color:'red'
    }
})