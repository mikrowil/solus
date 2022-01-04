import {ERROR_MESSAGE, SIGN_UP} from "../types";
import solusApi from "../../api/solusApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
