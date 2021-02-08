import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {smallImage} from '../util'
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg'
import fullStar from '../img/star-full.png';
import emptyStar from '../img/star-empty.png'
function GameDetails({pathId}) {
    const history = useHistory()
    const exitHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')) {
            history.push('/')
        }
    }
    const platformLogo = (platform) => {
        switch(platform){
            case "PlayStation 4":
              return playstation;
            case "PlayStation 5":
              return playstation;
            case "Xbox Series S/X":
              return xbox;
            case "Xbox S":
              return xbox;
            case "Xbox One":
              return xbox;
            case "PC":
              return steam;
            case "Nintendo Switch":
              return nintendo;
            case "iOS":
              return apple;
            default:
              return gamepad;
          }
      
    }
    const {detail , screen , isLoading} = useSelector(state => state.details)
    const getStars = () => {
        const stars = [];
        const rating = Math.round(detail.rating);
        for(let i = 1 ; i<=5 ; i++) {
            if(i<rating) {
                stars.push(<img src = {fullStar} alt = 'fullStar'></img>)
            }
            else {
                stars.push(<img src = {emptyStar} alt = 'empty'></img>)
            }
        }
        return stars;
    }
    return (
        <>
        {!isLoading &&(
        <CardShadow className = 'shadow' onClick = {exitHandler}>
            <Details layoutId = {pathId}>
                <Stats>
                    <div className="rating">
                    <motion.h3 layoutId = {`heading ${pathId}`}>{detail.name}</motion.h3>
                        <p>rating :- {detail.rating}</p>
                        {getStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platform>
                            {detail.platforms && (detail.platforms.map(data => (
                                <img key = {data.platform.id} src = {platformLogo(data.platform.name)} alt = {data.platform.name}/>
                            )))}
                        </Platform>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId = {`img ${pathId}`} src={smallImage(detail.background_image,1280)} alt="image"/>
                </Media>
                <Description>
                    <p>
                        {detail.description_raw}
                    </p>
                </Description>
                <div className="gallery">
                    {screen.results && (screen.results.map(screens => (
                        <img src={smallImage(screens.image, 1280)} key = {screens.id} alt="image"/>
                    )))}
                </div>
            </Details>
        </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width : 100%;
    height : 100vh;
    overflow-y : scroll;
    background : rgba(0,0,0,0.5);
    position : fixed;
    top : 0;
    left : 0;
    z-index : 5;
    &::-webkit-scrollbar {
        width : 0.5rem
    }
    &::-webkit-scrollbar-thumb {
        background-color : #1164b4
    }
    &::-webkit-scrollbar-track {
        background : white;
    }
`
const Details = styled(motion.div)`
    width : 80%;
    border-radius : 1rem;
    padding : 2rem 5rem;
    background : white;
    position : absolute;
    left : 10%;
    z-index : 10;
    color : black;
    img {
        width : 100%;
    }
`

const Stats = styled(motion.div)`
    display : flex;
    align-items : center;
    justify-content : space-between;
    img {
        width : 2rem;
        height : 2rem;
        display : inline;
    }
`

const Info = styled(motion.div)`
    text-align : center;
`

const Platform = styled(motion.div)`
    display : flex;
    justify-content : space-evenly;
    img {
        margin-left : 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top : 3rem;
    img {
        width : 100%
    }
`

const Description = styled(motion.div)`
    margin : 5rem 0rem
`
export default GameDetails
