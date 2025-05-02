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

const guessesQty = 3;

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
  const [guesses, setGuesses] = useState(guessesQty); // 3 chances
  const [score, setScore] = useState(0);


  // Escolhendo a categoria e a palavra aleatória
  const pickWordAndCategory = useCallback(() => {
    // categoria aleatória
    const categories = Object.keys(words); // aqui eu estou escolhendo uma chave do meu objeto (que é a categoria)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]; // aqui eu consigo escolher uma chave aleatória e arredondar para um número inteiro


    // palavra aleatória da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]; // words[category] => significa que estou buscando uma palavra daquela categoria

    // desativando cheater
    // console.log(category)
    // console.log(word)

    return { word, category }
  }, [words]);


  // Funções para mudar as fases do jogo
  const startGame = useCallback(() => {
    // Escolhendo palavra e categoria
    const { word, category } = pickWordAndCategory()

    // Limpando as letras
    clearLetterStates()

    // Criando um array de letras
    let wordLetters = word.split("") // Divide a palavra em caracteres

    wordLetters = wordLetters.map((w) => w.toLowerCase());

    // Cheater
    console.log(wordLetters)
    console.log(word, category);

    // Preenchendo os estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    // setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // Depois, quando o usuário clicar em "Iniciar Jogo":
  const handleStart = () => {
    startGame();
    setGameStage("mid");
  };

  // processo do input da letra
  const verifyLetter = (letter) => {

    // Deixando letras minúsculas
    const normalizedLetter = letter.toLowerCase()

    // Checando se a letra é ultilizada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // Adicione a letra correta ou diminua uma tentativa caso tenha errado a letra
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      // Isto diminui o número de tentativas do usuário 
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  // useEffect(() => {
  //   setGameStage(stages[0].name);
  // }, []);


  // Função que reinicia os states
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // Condição de derrota
  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // Checando a condição de vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // condição de vitória
    if (guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {
      // adicionando pontuação
      setScore((actualScore) => (actualScore += 100));

      // restart com novas palavras
      startGame();
    }
  }, [guessedLetters, startGame, letters, gameStage]);


  // função para reiniciar o jogo na tela principal
  const retryGame = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name)
  }

  // função para reiniciar o jogo na tela do jogo
  const playAgain = () => {
    startGame();
    setGameStage("mid");
    setGuesses(guessesQty);
    setScore(0);
  };



  return (
    <>
      <div className='App'>
        {gameStage === "start" && <StartScreen startGame={handleStart} />}
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
        {gameStage === "end" && <EndGame playAgain={playAgain} retryGame={retryGame} score={score} />}
      </div>
    </>
  );
};

export default App;
