import "./Contact.css";
import { FaEnvelope, FaInstagram, FaGithub } from "react-icons/fa";

function Contact() {
    function OnClick(link) {
        switch (link) {
            case "email":
                window.location.href = "mailto:felipe.dariva07@gmail.com";
                break;
            case "instagram":
                window.location.href = "https://www.instagram.com/f.noronha11/";
                break;
            case "github":
                window.location.href = "https://github.com/Noronha-html";
                break;
            default:
                break;
        }
    }

    return (
        <section className="contact">
            <h2>Contato</h2>
            <p>Se interessou? Vamos construir algo juntos! <br /></p>
            <button type="button" onClick={() => OnClick("email")}>
                <FaEnvelope />
                Email
            </button>
            <button type="button" onClick={() => OnClick("instagram")}>
                <FaInstagram />
                Instagram
            </button>
            <button type="button" onClick={() => OnClick("github")}>
                <FaGithub />
                Github
            </button>
        </section>
    )
}

export default Contact;