'use client'
import { Animacao } from "./Animacao"
import "./Sobre.css"
import "./Animacao.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedal } from '@fortawesome/free-solid-svg-icons';

export const Sobre = () => {
    const ref = Animacao('slide-in-left', 'slide-in-left-active');
    const ref2 = Animacao('slide-in-right', 'slide-in-right-active');
    const ref3 = Animacao('hidden', 'fade-in');

    return (
        <section  className="container-sobre">
            <div  className="content-sobre">
                <h2 ref={ref3} className="hidden sobre"><span><FontAwesomeIcon className="medal-icon" icon={faMedal}/></span> Sobre</h2>
                <section className="section-sobre">
                    <div ref={ref} className="slide-in-left imagem-michel">
                        {/* <img src="/images/michel.jpg" alt="" /> */}
                    </div>
                    <article ref={ref2} className="slide-in-right">
                        <p>👨‍💻 Desenvolvedor Front-End</p>
                        <p>🏆 Em busca de um estágio para colocar em prática os conhecimentos teóricos</p>
                        <p>🎓 Cursando Engenharia de Software</p>
                        <p>📚 Conhecimentos em ReactJs, TailwindCss e TypeScript</p>
                        <p>🚀 Buscando uma oportunidade para atuar como desenvolvedor</p>
                        {/* <p>Me chamo <span>Michel</span>, tenho 22 anos, sou estudante de <span>Engenharia de Software</span>, e focado em <span>Desenvolvimento Web Front-End</span></p>
                        <p>Estou em busca da minha primeira oportunidade no mundo da programação, possuo os conhecimento das seguintes tecnologias: <span>ReactJs, TailwindCss, TypeScript</span></p>
                        <p>Estou em constante evolução de estudo e sempre querendo aprender mais </p> */}
                    </article>
                </section>
            </div>
        </section>
    )
}