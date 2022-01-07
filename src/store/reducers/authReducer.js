
import {SIGN_IN, SIGN_UP} from '../types'
const initState = {
    token:null,
}

/**
 * Reducer for changing reduce authentication state variables.
 * @param state
 * @param action
 * @returns {{token: null}|{token}}
 */
export const authReducer = (state = initState, action)=>{
    switch (action.type){
        case SIGN_UP:
            return {...state, token: action.payload}
        case SIGN_IN:
            return {...state, token: action.payload}

        default:
            return state
    }
}
