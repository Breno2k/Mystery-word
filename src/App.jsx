// css
import './App.css';

// data
import { wordsList } from "./data/words";

// react
import { useState, useCallback, useEffect } from 'react';

// components
import StartScreen from './components/StartScreen';
import MidGame from './components/MidGame';
import EndGame from './components/EndGame';



// Fases do jogo => início, meio e fim
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "mid" },
  { id: 3, name: "end" },
];


function App() {

  // Aqui eu estou declarando a fase do jogo
  const [gameStage, setGameStage] = useState(stages[0].name);

  // Adicionando os dados
  const [words] = useState(wordsList);

  // Função para mudar a fase do jogo
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retryGame = () => {
    setGameStage(stages[0].name)
  }

  console.log(words)

  return (
    <>
      <div className='App'>
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "mid" && <MidGame verifyLetter={verifyLetter} />}
        {gameStage === "end" && <EndGame retryGame={retryGame} />}
      </div>
    </>
  );
};

export default App;
