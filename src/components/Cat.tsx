import React from 'react';
import { SafeAreaView, View,Text } from 'react-native';


const Cat = ({name}:{name:string})=>{

    return(
        <SafeAreaView>
            <View>
                <Text> Hello {name}</Text>
            </View>
        </SafeAreaView>
    )

}
export default Cat;