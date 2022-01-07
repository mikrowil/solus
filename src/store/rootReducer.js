import {combineReducers} from "redux";
import {authReducer} from "./reducers/authReducer";

/**
 * Combines all reducers into one so the redux store can be properly used.
 */
const rootReducer = combineReducers({
    auth:authReducer
})

export default rootReducer
