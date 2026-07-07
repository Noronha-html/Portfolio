import "./Header.css";
import { FaUser, FaCode, FaFolderOpen, FaPhone } from "react-icons/fa";

function Header() {
    return (
        <header className="header">
            <div className="name-container">
                <FaUser className="name-icon" />
                <h1 className="name">Felipe Noronha</h1>
            </div>

            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <FaFolderOpen className="nav-icon" />
                        <a href="#about" className="nav-link">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <FaCode className="nav-icon" />
                        <a href="#projects" className="nav-link">Projetos</a>
                    </li>
                    <li className="nav-item">
                        <FaPhone className="nav-icon" />
                        <a href="#contact" className="nav-link">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;