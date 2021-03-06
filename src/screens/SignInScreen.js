import React from "react";
import {StyleSheet, View} from "react-native";
import {Text, Button, Input} from 'react-native-elements'
import {useDispatch} from "react-redux";
import {signIn} from '../store/actions/authActions'

/**
 * The sign in screen is where the user can authenticate themselves by providing a username and password.
 * @param navigation
 * @returns {JSX.Element}
 * @constructor
 */
export default function SignInScreen({navigation}) {

    const dispatch = useDispatch()

    const goToSignUp = () =>{
        navigation.navigate('signUp')
    }

    //Calls the signIn action from authActions
    const callSignIn = () =>{
        dispatch(signIn)
    }

    return (
        <View style={styles.container}>
            <Text h1>Sign in screen</Text>
            <Input placeholder={"Username"}/>
            <Input placeholder={"Password"}/>
            <Button
                title={"Sign in"}
                onPress={callSignIn}
            />
            <Button
                title={"Sign up"}
                onPress={goToSignUp}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "center", alignItems: "center"
    }
})
