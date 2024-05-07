import {legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import reducer from './redux/slotes/reducer';
import {composeWithDevTools} from "redux-devtools-extension"

const store =createStore(reducer , composeWithDevTools(applyMiddleware(thunk))) 


export default store;