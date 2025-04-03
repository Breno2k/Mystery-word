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

  // Criando o estado da palavra, categoria e as letras
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  // Letras adicionadas, letras erradas, número de chances para adivinhar e pontuação
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3); // 3 chances
  const [score, setScore] = useState(0);


  // Escolhendo a categoria e a palavra aleatória
  const pickWordAndCategory = () => {
    // categoria aleatória
    const categories = Object.keys(words); // aqui eu estou escolhendo uma chave do meu objeto (que é a categoria)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]; // aqui eu consigo escolher uma chave aleatória e arredondar para um número inteiro


    // palavra aleatória da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]; // words[category] => significa que estou buscando uma palavra daquela categoria

    console.log(category)
    console.log(word)

    return { word, category }
  }


  // Funções para mudar as fases do jogo
  const startGame = () => {
    // Escolhendo palavra e categoria
    const { word, category } = pickWordAndCategory()

    // Criando um array de letras
    let wordLetters = word.split("") // Divide a palavra em caracteres

    wordLetters = wordLetters.map((w) => w.toLowerCase());

    console.log(wordLetters)
    console.log(word, category);

    // Preenchendo os estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }

  // processo do input da letra
  const verifyLetter = (letter) => {

    // Deixando letras minúsculas
    const normalizedLetter = letter.toLowerCase()

    // Checando se a letra é ultilizada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // empurre a letra adivinhada ou remova um palpite
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
    }
  }

  console.log(guessedLetters);
  console.log(wrongLetters);

  const retryGame = () => {
    setGameStage(stages[0].name)
  }



  return (
    <>
      <div className='App'>
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "mid" && (
          <MidGame
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            guesses={guesses}
            wrongLetters={wrongLetters}
            score={score}
          />
        )}
        {gameStage === "end" && <EndGame retryGame={retryGame} />}
      </div>
    </>
  );
};

export default App;
