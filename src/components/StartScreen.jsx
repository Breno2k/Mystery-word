import './StartScreen.css'

import globo from '../../public/globoTerrestre.gif'

const StartScreen = ({ startGame }) => {
    const title = "Mystery Word";

    const coloredTitle = title.split("").map((char, index) => {
        const colors = ["#e74c3c", "#f39c12", "#2ecc71", "#3498db", "#9b59b6", "#1abc9c", "#e67e22", "#34495e", "#d35400", "#696969", "#9400D3", "#16a085"];
        const color = colors[index % colors.length];

        return (
            <span
                key={index}
                style={{
                    color,
                    animationDelay: `${index * 0.1}s`
                }}
                className="letter-animation"
            >
                {char}
            </span>
        )
    });

    return (
        <div className='start'>
            <div className="background-animation"></div>
            <div className="content-container">
                <div className="title-container">
                    <h1 className="main-title">{coloredTitle}</h1>
                </div>

                <div className="image-container">
                    <div className="image-glow"></div>
                    <img src={globo} alt="gif animado" className="globe-image" />
                </div>

                <p className="subtitle">
                    🌟 Clique no botão abaixo para começar a jogar 🌟
                </p>

                <button onClick={startGame} className="start-button">
                    <span className="button-text">Começar o Jogo</span>
                    <div className="button-ripple"></div>
                </button>
            </div>
        </div>
    )
}

export default StartScreen;