import React from "react";
import {View, Text, StyleSheet} from "react-native";

/**
 * The home screen for the game. Not currently implemented.
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:22}}>Not yet implemented</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})
