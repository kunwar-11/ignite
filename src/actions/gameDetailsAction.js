import axios from 'axios'
import {gameDetails , gameScreenShot} from '../apidata'

export const gameDetail = (id) => async (dispatch) => {
    dispatch({
        type : 'LOADING_DETAILS'
    })
    const gameDetail = await axios.get(gameDetails(id));
    const gameScreen = await axios.get(gameScreenShot(id));
    dispatch({
        type : 'GAME_DETAILS',
        payload : {
            detail : gameDetail.data,
            screen : gameScreen.data
        }
    })
}