import {combineReducers} from 'redux'
import gameReducer from './gameReducer'
import gameDetails from './gameDetailReducer'
const allReducer = combineReducers({
    games : gameReducer,
    details : gameDetails
})

export default allReducer;