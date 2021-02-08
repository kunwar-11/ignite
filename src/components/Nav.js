import React , {useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import logo from '../img/logo.svg'
import {searchedGame} from '../actions/gamesAction'
import {useDispatch} from 'react-redux'
const Nav = () => {
    const dispatch = useDispatch();
    const [input , setInput] = useState('')
    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    }
    const submitHandler = (e) => {
            e.preventDefault();
            dispatch(searchedGame(input));
            setInput('')
    } 
    const removeSearched = () => {
        dispatch({
            type : 'CLEAR_SEARCHED'
        })
    }
    return (
        <StyledNav>
            <Logo onClick = {removeSearched}>
                <img src={logo} alt="logo"/>
                <h2>Ignite</h2>
            </Logo>
            <form className="input">
                <input value = {input} onChange = {inputChangeHandler} type="text"/>
                <button onClick = {submitHandler}>Search</button>
            </form>
        </StyledNav>
    )
}
const StyledNav = styled(motion.nav) `
    padding : 3rem 5rem;
    text-align : center;
    input {
        width : 50%;
        border : none;
        outline : none;
        padding : 0.5rem;
        margin-top : 1rem;
        font-size : 1.5rem;
        font-family : inherit;
        box-shadow : 0px 0px 35px rgba(0,0,0,0.2);
    }
    button{
        font-size : 1.5rem;
        border : none;
        outline : none;
        font-family : inherit;
        font-weight : normal;
        cursor: pointer;
        background-color :gray;
        color : whitesmoke;
        padding : 0.5rem 2rem;
    }
`
const Logo = styled(motion.div)`
    display : flex;
    justify-content : center;
    cursor: pointer;
    align-items : center;
    img {
        height : 2rem;
        width : 2rem;
    }
`


export default Nav
