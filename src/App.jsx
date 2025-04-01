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

  console.log(words)

  return (
    <>
      <div className='App'>
        {gameStage === "start" && <StartScreen />}
        {gameStage === "mid" && <MidGame />}
        {gameStage === "end" && <EndGame />}
      </div>
    </>
  );
};

export default App;
