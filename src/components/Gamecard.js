import React from 'react'

function Gamecard({name ,  released , image}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{released}</p>
        </div>
    )
}

export default Gamecard
