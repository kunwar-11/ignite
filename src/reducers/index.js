import {combineReducers} from 'redux'
import gameReducer from './gameReducer'

const allReducer = combineReducers({
    games : gameReducer,
})

export default allReducer;