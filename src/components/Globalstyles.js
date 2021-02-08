import { createStore } from 'redux'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `

    * {
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    }

    html {
        &::-webkit-scrollbar {
            width : 0.5rem
        }
        &::-webkit-scrollbar-thumb {
            background-color : darkgray
        }
        &::-webkit-scrollbar-track {
        background : white;
    }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width : 100%;
    }
    h2 {
        font-size : 3rem;
        font-family : inherit;
    }
    h3 {
        font-size : 1.3rem;
        padding : 1.5rem 0rem;
        color : #333;
    }
    p {
        font-size : 1.2rem;
        line-height : 200%;
        color : #696969;
    }
    a {
         text-decoration : none;
         color : #333;
    }
    img {
        display : block;
    }

`

export default GlobalStyle