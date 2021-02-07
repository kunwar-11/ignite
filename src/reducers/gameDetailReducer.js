import { gameDetails } from "../apidata"

const initialState = {
    detail : {},
    screen : {}
}

const gameDetailReducer = (state = initialState , action) => {
    switch(action.type) {
        case 'GAME_DETAILS' : 
            return {...state , detail : action.payload.detail , screen : action.payload.screen}
        default : 
            return  {...state}
    }
}

export default gameDetailReducer