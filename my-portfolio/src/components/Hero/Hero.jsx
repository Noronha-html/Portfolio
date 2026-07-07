import "./Hero.css";

function Hero() {
    return (
        <div className="hero">
            <img src="../../assets/images/my-github-img.png" alt="Minha foto" />
            <div className="hero-text">
                <h1>
                    Olá!<br />
                    Sou <strong>Felipe Noronha</strong>,<br />
                    Desenvolvedor Full-Stack
                </h1>
                <p>
                    Busco agregar valor com soluções inovadoras e eficientes.<br />
                    Estou sempre em busca de novos desafios e oportunidades de aprendizado.
                </p>
            </div>
        </div>
    )
}

export default Hero;