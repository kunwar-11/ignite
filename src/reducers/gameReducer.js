const initialState = {
    popularGames : [],
    newGames : [],
    upcomingGames : []
}
const gameReducer = (state = initialState , action) => {
    switch(action.type) {
        case 'FETCH_GAME' : 
            return {...state , popularGames : action.payload.popular , newGames : action.payload.newGames , upcomingGames : action.payload.upcomingGames}
        default : 
            return {...state}
    }
}

export default gameReducer