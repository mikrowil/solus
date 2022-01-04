import Thunk from 'redux-thunk'
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(Thunk))

export default store
