import './StartScreen.css'

const StartScreen = () => {
    return (
        <div className='start'>
            <h1>Mystery Word</h1>
            <img src="/globo-terrestre.gif" alt="gif animado" />
            <p>Clique no botão abaixo para começar a jogar</p>
            <button>começar o jogo</button>
        </div>
    )
}

export default StartScreen