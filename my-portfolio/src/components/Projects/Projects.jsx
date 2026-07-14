import "./Projects.css";

function Projects() {
    return (
        <section className="projects">
            <h2>Alguns dos meus projetos</h2>
            <div className="projects-card">
                <img src="" alt="" srcset="" />
                <div className="projects-card__text">
                    <h3>Tech-Pet</h3>
                    <p>
                        segurança e confiabilidade provida pela Tech-Pet 
                        para uma relação de confiança entre dono e o seu pet.
                    </p>
                </div>
            </div>
            <div className="projects-card">
                <img src="" alt="" srcset="" />
                <div className="projects-card__text">
                    <h3>The Cult</h3>
                    <p>
                        Viva a aventura de um guerreiro em masmorras cheias de inimigos e itens para coletar. 
                        A cada batalha, torne-se mais poderoso.
                    </p>
                </div>
            </div>
            <div className="projects-card">
                <img src="" alt="" srcset="" />
                <div className="projects-card__text">
                    <h3>Organo</h3>
                    <p>
                        Cadastre pessoas, enquanto organizar equipes isso facilita a 
                        distribuição de funções e melhora a colaboração.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Projects;