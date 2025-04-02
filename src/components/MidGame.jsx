import React from 'react'
import './MidGame.css'

const MidGame = ({ verifyLetter }) => {
    return (
        <div>
            <h1>MidGame</h1>
            <button onClick={verifyLetter}>Finalizar jogo</button>
        </div>
    )
}

export default MidGame