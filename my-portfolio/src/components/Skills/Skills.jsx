import "./Skills.css";
import { FaJs, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaPhp } from "react-icons/fa";

function Skills() {
    return (
        <div className="skills">
            <h2>Minhas Habilidades</h2>
            <ul>
                <li><FaJs className="skill-icon" /> <span>JavaScript</span></li>
                <li><FaReact className="skill-icon" /> <span>React</span></li>
                <li><FaNodeJs className="skill-icon" /> <span>Node.js</span></li>
                <li><FaCss3Alt className="skill-icon" /> <span>CSS</span></li>
                <li><FaHtml5 className="skill-icon" /> <span>HTML</span></li>
                <li><FaPhp className="skill-icon" /> <span>PHP</span></li>
            </ul>
        </div>
    );
}

export default Skills;