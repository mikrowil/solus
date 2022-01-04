import React from 'react'
import {StyleSheet, Text, View} from "react-native";

export default function StartScreen() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:22}}>Start screen</Text>
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
