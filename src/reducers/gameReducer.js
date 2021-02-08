const initialState = {
    popularGames : [],
    newGames : [],
    upcomingGames : [],
    searchedGames : []
}
const gameReducer = (state = initialState , action) => {
    switch(action.type) {
        case 'FETCH_GAME' : 
            return {...state , popularGames : action.payload.popular , newGames : action.payload.newGames , upcomingGames : action.payload.upcomingGames}
        case 'FETCH_SEARCHED' : 
            return { ...state , searchedGames : action.payload.searched }
        case 'CLEAR_SEARCHED' : 
            return {...state , searchedGames : []}
        default : 
            return {...state}
    }
}

export default gameReducer