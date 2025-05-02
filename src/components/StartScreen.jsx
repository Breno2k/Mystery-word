import './StartScreen.css'

const StartScreen = ({ startGame }) => {

    const title = "Mystery Word";

    const coloredTitle = title.split("").map((char, index) => {

        const colors = ["#e74c3c", "#f39c12", "#2ecc71", "#3498db", "#9b59b6", "#1abc9c", "#e67e22", "#34495e", "#d35400", "#696969", "#9400D3", "#16a085"];

        // Garante que, mesmo que a palavra tenha mais letras do que cores, o índice volte ao início do array de cores (como um loop)
        const color = colors[index % colors.length];

        return (
            <span key={index} style={{ color }}>
                {char}
            </span>
        )
    })
    return (
        <div className='start'>
            <h1>{coloredTitle}</h1>
            <img src="/globo-terrestre.gif" alt="gif animado" />
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={startGame}>começar o jogo</button>
        </div>
    )
}

export default StartScreen