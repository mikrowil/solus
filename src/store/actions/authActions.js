import {ERROR_MESSAGE, SIGN_UP} from "../types";
import solusApi from "../../api/solusApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Calls the backends signup route. This handles creating the user and saving the jsonwebtoken into asyncstorage
 * for authenticating the user and navigating to the main game.
 * @param username
 * @param password
 * @returns {(function(*): Promise<void>)|*}
 */
export const signUp = ({username, password}) => async dispatch => {

    try {
        const res = await solusApi.post('/signup', {username, password})
        await AsyncStorage.setItem('token', res.data.token)
        dispatch({type: SIGN_UP, payload: res.data.token})
    } catch (e) {

        dispatch({
            type: ERROR_MESSAGE, payload: 'Username already in use. ' +
                'Please use another username'
        })
    }

}

/**
 * Calls the backends signin route. This handles saving the jsonwebtoken into asyncstorage
 * for authenticating the user and navigating to the main game.
 * @param username
 * @param password
 * @returns {(function(*): Promise<void>)|*}
 */
export const signIn = ({username, password}) => async dispatch => {

    try {
        const res = await solusApi.post('/signin', {username, password})
        await AsyncStorage.setItem('token', res.data.token)
        dispatch({type: SIGN_UP, payload: res.data.token})
    } catch (e) {

        dispatch({
            type: ERROR_MESSAGE, payload: 'Username already in use. ' +
                'Please use another username'
        })
    }

}
