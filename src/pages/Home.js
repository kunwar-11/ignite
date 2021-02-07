import React , {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {loadGames} from '../actions/gamesAction'
import Gamecard from '../components/Gamecard'
import styled from 'styled-components'
import {motion} from 'framer-motion'
function Home() {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames())
  },[])
    const {popularGames , newGames , upcomingGames} = useSelector(state => state.games)
    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcomingGames.map(game => (
                    <Gamecard name = {game.name} released = {game.released} id = {game.id} key= {game.id} image = {game.background_image} />
                ))}
            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding : 0rem 5rem;
    h2 {
        padding : 5rem 0rem;
    }
`
const Games = styled(motion.div)``
export default Home
