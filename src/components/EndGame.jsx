import React from 'react'
import './EndGame.css'

const EndGame = ({ playAgain, retryGame, score }) => {
    return (
        <div className="endgame">
            <div className="floating-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>

            <div className="endgame-container">
                <h1 className="game-over-title">Game Over</h1>
                <h2 className="score-display">
                    Sua pontuação final:<br />
                    <span className="score-number">{score} pontos</span>
                </h2>

                <div className="button-container">
                    <button
                        className="endgame-button play-again-btn"
                        onClick={playAgain}
                    >
                        🎮 Jogar Novamente
                    </button>
                    <button
                        className="endgame-button back-home-btn"
                        onClick={retryGame}
                    >
                        🏠 Voltar ao Início
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EndGame