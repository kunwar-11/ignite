import axios from 'axios';
import {popularGame , newGames , upcomingGames} from '../apidata'

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