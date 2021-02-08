import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {gameDetail} from '../actions/gameDetailsAction'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {smallImage} from '../util'
function Gamecard({name ,  released , id , image}) {
    const stringId = id.toString()
    const history = useHistory()
    if(history.location.pathname === '/'){
        document.body.style.overflow = 'auto'
    }
    else {
        document.body.style.overflow = 'hidden'
    }
    const dispatch = useDispatch()
    const loadGameDetails = () => {
        dispatch(gameDetail(id))
    }
    return (
        <StyledGameCard layoutId = {stringId} onClick = {loadGameDetails}>
            <Link to = {`/games/${id}`}>
            <motion.img layoutId = {`img ${stringId}`} src={smallImage(image, 640)} alt={name}/>
            <motion.h3 layoutId = {`heading ${stringId}`}>{name}</motion.h3>
            <p>{released}</p>
            </Link>
        </StyledGameCard>
    )
}

const StyledGameCard = styled(motion.div)`
    min-height : 30vh;
    box-shadow : 0px 5px 20px rgba(0,0,0,0.3);
    text-align : center;
    border-radius : 1rem;
    cursor: pointer;
    overflow : hidden;
    img {
        width : 100%;
        height : 50vh;
        object-fit : cover;
    }
`
export default Gamecard
