import imageRichard from "../../assets/richard.jpg"
import imageEmily from "../../assets/emily.jpg"
import imageYanick from "../../assets/Yanick Jose Zen dos Santos.jpg"

import {  MainSobre } from "../../styled"

export default function Produtos(){

    return(
        <MainSobre>
                    <div className="sobre_nos">
                        <h1>Somos o seguro que está sempre com você</h1>
                        <p>A Security é uma empresa de seguro de carro que se destaca pela oferta de soluções de segurança personalizadas e
                        abrangentes para seus clientes. Com uma equipe especializada e tecnologia avançada, a Security oferece uma variedade de planos
                        de seguro que atendem às diferentes necessidades e circunstâncias dos motoristas. Desde cobertura básica até pacotes completos
                        que incluem proteção contra danos, responsabilidades civis, roubo e incêndio, a Security trabalha para garantir que seus clientes
                        estejam adequadamente protegidos em qualquer eventualidade. Além disso, a empresa valoriza a transparência e a excelência no atendimento
                        ao cliente,oferecendo suporte detalhado e orientação para ajudar os clientes a escolher o plano de seguro mais adequado para
                        suas necessidades.
                        Com uma longa história de compromisso com a segurança no trânsito, a Security continua a inovar e a adaptar suas
                        ofertas para atender às mudanças no mercado e às expectativas dos consumidores,garantindo que seus clientes mantenham a paz mental ao
                        conhecerem que estão bem protegidos em suas jornadas por estradas.</p>
                        
                    </div>

                    <h1 className="Titulo">Conheça os integrantes da Security:</h1>
                    <div className="Integrantes">
                            <div className="card">
                                <img src={imageRichard} alt="" />
                                <div className="links_pessoais">
                                    <p>Richard Lopes da Silva</p>
                                    <ul>
                                        <li><a href="https://www.instagram.com/lopes_richard1?igsh=MXNwMjg4Mm42ZzNpZQ%3D%3D&utm_source=qr"
                                            target="_blank">Instagram</a></li>
                                        <li><a href="https://www.linkedin.com/in/richard-lopes-964a4b24a/" target="_blank ">linkedin</a></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="card">
                                <img src={imageEmily} alt="" />
                                <div className="links_pessoais">
                                    <p>Emily Maria</p>
                                    <ul>
                                        <li><a href="https://www.instagram.com/emy_5198/profilecard/?igsh=MXYxdGpwN21lcWtnbQ=="
                                            target="_blank">Instagram</a></li>
                                        <li><a href="https://www.linkedin.com/in/emily-macedo-5a9474329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank ">linkedin</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">
                            <img src={imageYanick} alt="" />
                                <div className="links_pessoais">
                                    <p>Yanick Jose Zen dos Santos</p>
                                    <ul>
                                        <li><a href="https://www.instagram.com/ynk.s_?igsh=MWQ4bzU4NHNiYTdsbQ%3D%3D&utm_source=qr"
                                            target="_blank">Instagram</a></li>
                                        <li><a href="https://teams.microsoft.com/l/message/48:notes/1726488629062?context=%7B%22contextType%22%3A%22chat%22%7D" target="_blank ">linkedin</a></li>
                                    </ul>
                                </div>
                            </div>
                     </div>
        </MainSobre>
    )
}