import React , {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {loadGames} from '../actions/gamesAction'
import Gamecard from '../components/Gamecard'
import GameDetails from '../components/GameDetails'
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {motion , AnimatePresence , AnimateSharedLayout} from 'framer-motion'
function Home() {
    const location = useLocation();
    const pathId = location.pathname.split('/')[2]
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames())
  },[dispatch])
    const {popularGames , newGames , upcomingGames} = useSelector(state => state.games)
    return (
        <GameList>
            <AnimateSharedLayout type = 'crossfade'>
                <AnimatePresence>
                     {pathId && <GameDetails pathId = {pathId}/>}
                </AnimatePresence>
                <h2>Upcoming Games</h2>
                <Games>
                    {upcomingGames.map(game => (
                        <Gamecard name = {game.name} released = {game.released} id = {game.id} key= {game.id} image = {game.background_image} />
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popularGames.map(game => (
                        <Gamecard name = {game.name} released = {game.released} id = {game.id} key= {game.id} image = {game.background_image} />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map(game => (
                        <Gamecard name = {game.name} released = {game.released} id = {game.id} key= {game.id} image = {game.background_image} />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding : 0rem 5rem;
    h2 {
        padding : 5rem 0rem;
    }
`
const Games = styled(motion.div)`
    min-height : 80vh;
    display : grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 5rem 3rem;
    align-content: center;

`
export default Home
