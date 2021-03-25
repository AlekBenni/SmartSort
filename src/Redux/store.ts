import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {shopReducer} from './shopReducer';

const rootState = combineReducers({
    shop: shopReducer
})

export const store = createStore(rootState, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootState>