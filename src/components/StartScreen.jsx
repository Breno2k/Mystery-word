import './StartScreen.css'

const StartScreen = ({ startGame }) => {
    return (
        <div className='start'>
            <h1>Mystery Word</h1>
            <img src="/globo-terrestre.gif" alt="gif animado" />
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={startGame}>começar o jogo</button>
        </div>
    )
}

export default StartScreen