
import {SIGN_IN, SIGN_UP} from '../types'
const initState = {
    token:null,
}

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
