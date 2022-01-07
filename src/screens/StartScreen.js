import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {Button} from 'react-native-elements'

/**
 * Current entry point for the main game
 * @param navigation
 * @returns {JSX.Element}
 * @constructor
 */
export default function StartScreen({navigation}) {


    return (
        <View style={styles.container}>
            <Text style={{fontSize:22}}>Start screen</Text>
            <Button title={"Fight!!"} onPress={()=>{
                navigation.navigate('fight')
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
