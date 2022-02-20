import {createStore,combineReducers,applyMiddleware} from 'redux'
import shopReducer from './shopReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
let reducer=combineReducers({
    shopReducer
})
export default createStore(reducer,applyMiddleware(thunk,logger))