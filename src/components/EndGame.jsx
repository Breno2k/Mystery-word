import React from 'react'
import './EndGame.css'

const EndGame = ({ retryGame }) => {
    return (
        <div>
            <h1>Game Over</h1>
            <button onClick={retryGame}>Jogar novamente</button>
        </div>
    )
}

export default EndGame