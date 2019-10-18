import { dataReducer } from './data'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    data: dataReducer
})