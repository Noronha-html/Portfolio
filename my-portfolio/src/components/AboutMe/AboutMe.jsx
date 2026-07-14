import "./AboutMe.css";
import { FaDesktop, FaCode, FaDatabase } from "react-icons/fa";

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me__left">
            <h2 className="about-me__title">Sobre Mim</h2>
            <p className="about-me__text">
                Sou um desenvolvedor web apaixonado, com forte interesse em criar aplicações 
                web dinâmicas e amigáveis. Tenho experiência em HTML, CSS, JavaScript, React, Php e Node.js 
                e estou sempre ansioso para aprender novas tecnologias e aprimorar minhas habilidades. 
                No meu tempo livre, gosto de contribuir para projetos de código aberto e explorar 
                as últimas tendências em desenvolvimento web.
            </p>
            </div>
            <div className="about-me__right">
                <div className="about-me__card">
                    <FaDesktop />
                    <h3>Front-End</h3>
                    <p>
                        Utilizo tecnologias como HTML, CSS e JavaScript para criar 
                        interfaces de usuário atraentes e responsivas.
                    </p>
                </div>
                <div className="about-me__card">
                    <FaCode />
                    <h3>Back-End</h3>
                    <p>
                        Tenho experiência em desenvolvimento de APIs e integração com bancos de dados
                        utilizando Node.js e PHP.
                    </p>
                </div>
                <div className="about-me__card">
                    <FaDatabase />
                    <h3>Bancos de Dados</h3>
                    <p>
                        Trabalho com bancos de dados relacionais e não relacionais, garantindo 
                        a integridade e eficiência dos dados.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;