import "./Skills.css";
import { FaJs, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaPhp } from "react-icons/fa";

function Skills() {
    return (
        <div className="skills">
            <h2>Minhas Habilidades</h2>
            <ul>
                <li><FaJs /> <span>JavaScript</span></li>
                <li><FaReact /> <span>React</span></li>
                <li><FaNodeJs /> <span>Node.js</span></li>
                <li><FaCss3Alt /> <span>CSS</span></li>
                <li><FaHtml5 /> <span>HTML</span></li>
                <li><FaPhp /> <span>PHP</span></li>
            </ul>
        </div>
    );
}

export default Skills;