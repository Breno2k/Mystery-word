import React, { useRef, useState } from 'react'
import './MidGame.css'

const MidGame = ({ verifyLetter, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score, }) => {

    const [letter, setLetter] = useState("");

    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");

        letterInputRef.current.focus();
    };

    return (
        <div className="game">
            <p className="points">
                <span>Pontuação</span>: {score}
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s).</p>
            <div className="wordContainer">
                {letters.map((letter, i) =>
                    guessedLetters.includes(letter) ? (
                        <span key={i} className="letter">{letter}</span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                )}
            </div>
            <div className="letterContainer">
                <p>Tente adivinhar a palavra: </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength="1"
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Jogar!</button>
                </form>
            </div>
            <div>
                <p>Letras já ultilizadas:</p>
                <div className="wrongLettersContainer">
                    {wrongLetters.map((letter, i) => (
                        <span key={i}><strong>{letter.toUpperCase()}</strong>&nbsp; &nbsp; </span>
                    ))}
                </div>

            </div>
            <div className="teste"></div>
        </div>
    )
}

export default MidGame