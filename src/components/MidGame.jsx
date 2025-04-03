import React from 'react'
import './MidGame.css'

const MidGame = ({ verifyLetter }) => {
    return (
        <div className="game">
            <p className="points">
                <span>pontuation: 000</span>
            </p>
            <h1>Adivinhe a palavra: </h1>
            <h3 className="tip">
                Dica da palavra: <span>Dica...</span>
            </h3>
            <div className="wordContainer">
                <span className="letter">A</span>
                <span className="blankSquare"></span>
            </div>
            <div className="letterContainer">
                <p>Tente adivinhar a palavra: </p>
                <form action="">
                    <input type="text" name="letter" maxLength="1" required />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já ultilizadas:</p>
                <span>A, </span>
                <span>B, </span>
            </div>
        </div>
    )
}

export default MidGame