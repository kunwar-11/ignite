import axios from 'axios';
import {popularGame , newGames , upcomingGames , searchedGames} from '../apidata'

export const loadGames = () => async (dispatch) => {
    const popularGames = await axios.get(popularGame());
    const newGame = await axios.get(newGames());
    const upcomingGame = await axios.get(upcomingGames())
    dispatch({
        type : 'FETCH_GAME',
        payload : {
            popular : popularGames.data.results,
            newGames : newGame.data.results,
            upcomingGames : upcomingGame.data.results
        }
    })
}

export const searchedGame = (game_name) => async (dispatch) => {
    const search = await axios.get(searchedGames(game_name));
    dispatch({
        type : 'FETCH_SEARCHED',
        payload : {
            searched : search.data.results
        }
    })
}