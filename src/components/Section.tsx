import "./Section.css";
import { TextTyper } from "./TextTyper";
import { TypingEffect } from "./TypingEffect";
import TypeIt from "typeit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Section = () => {
    return (
        <section id="home" className="containerSection">
            <div>
                <p>Olá, eu sou o...</p>
                <h2 className="h2Name">Michel Freitas</h2>
                {/* <TextTyper fullText="Web Developer - Front-End"/> */}
                <div className="efeito">
                    <TypingEffect/>
                </div>
            </div>
            <nav>
                <ul>
                    <li className="lista-section">
                        <a className="a" href="https://www.linkedin.com/in/michelonly/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/>
                        </a>
                    </li>
                    <li className="lista-section">
                        <a className="a"  href="">
                            <FontAwesomeIcon icon={faGithub}className="github-icon"/>
                        </a>
                    </li>
                    <li className="lista-section">
                        <a className="a"  href="">
                            <FontAwesomeIcon icon={faInstagram}className="insta-icon"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}