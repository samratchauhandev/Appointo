import {legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import reducer from './redux/slotes/reducer';

const store =createStore(reducer , applyMiddleware(thunk)) 


export default store;