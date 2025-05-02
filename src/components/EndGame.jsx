import React from 'react'
import './EndGame.css'

const EndGame = ({ playAgain, retryGame, score }) => {
    return (
        <div>
            <h1>Você perdeu!</h1>
            <h2>Você obteve uma pontuação de: <span>{score}</span></h2>
            <button onClick={playAgain}>Jogar novamente</button>
            <button onClick={retryGame}>Voltar ao início</button>
        </div>
    )
}

export default EndGame