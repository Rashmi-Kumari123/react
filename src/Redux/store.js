import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';
const rootReducer = combineReducers({
    product : (state={totalProducts:0}, action)=>{return state;}
})
export const store =legacy_createStore(rootReducer, applyMiddleware(thunk))