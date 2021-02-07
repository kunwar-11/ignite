import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {gameDetail} from '../actions/gameDetailsAction'
import {useDispatch} from 'react-redux'
function Gamecard({name ,  released , id , image}) {
    const dispatch = useDispatch()
    const loadGameDetails = () => {
        dispatch(gameDetail(id))
    }
    return (
        <StyledGameCard onClick = {loadGameDetails}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name}/>
        </StyledGameCard>
    )
}

const StyledGameCard = styled(motion.div)`
    min-height : 30vh;
    box-shadow : 0px 5px 20px rgba(0,0,0,0.3);
    text-align : center;
    border-radius : 1rem;
    img {
        width : 100%;
        height : 50vh;
        object-fit : cover;
    }
`
export default Gamecard
