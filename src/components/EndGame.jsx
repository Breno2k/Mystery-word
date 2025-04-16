import React from 'react'
import './EndGame.css'

const EndGame = ({ retryGame, score }) => {
    return (
        <div>
            <h1>Você perdeu!</h1>
            <h2>Você obteve uma pontuação de: <span>{score}</span></h2>
            <button onClick={retryGame}>Jogar novamente</button>
        </div>
    )
}

export default EndGame