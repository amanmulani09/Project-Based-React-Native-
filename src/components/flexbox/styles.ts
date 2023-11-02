import { StyleSheet } from "react-native";

export const flexStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4286f4',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    viewStyleOne: {
        width:40,
        height:40,
        justifyContent: 'center',
        alignItems:'center', 
        backgroundColor:'#b642f4',
        // alignSelf:'flex-start',
        flexBasis:40
        // flexGrow:1
    },
    viewStylTwo :{
        width:40,
        height:40,
        justifyContent: 'center',
        alignItems:'center', 
        backgroundColor:'#228B22',
        flexBasis:40
    },
    viewStyleThree: {
        width:40,
        height:40,
        justifyContent: 'center',
        alignItems:'center', 
        backgroundColor:'#800080',
        // alignSelf:'flex-end',
        flexBasis:20
    }
})