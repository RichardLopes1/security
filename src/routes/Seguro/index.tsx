import imageMachucado from '../../assets/machucado.png'
import imageRoubo from "../../assets/roubo.png"
import { MainSeguro } from '../../styled'

export default function Seguro() {
    return (
        <MainSeguro>

            <div className="foto_fundo">
                <div className="conteudo">
                    <h1>Seguro auto</h1>
                    <p>Conte com nosso seguro de carro</p>
                </div>
            </div>

            <div className="Sobre_seguro">

                <div className='titulo_sobre_seguro'>
                    <h1>Sobre o Seguro Auto</h1><br />
                </div>
                <div className='conteudo_sobre_seguro'>
                    <p>A Security Seguro Auto oferece diversos tipos de coberturas e serviços para os casos de acidentes e/ou roubo/furtos, com total assistência para quem dirige, para os passageiros e para outras pessoas e veículos que possam ser atingidos.
                        <br /><br /><br />
                        Proteção completa e mais tranquilidade a você.</p>
                </div>
            </div>

            <div className="titulo">
                <h2>Coberturas que voce pode contar</h2>
                <p>Com coberturas básicas e adicionais, você garante a proteção ideal para o seu veículo, do seu jeito.</p>
            </div>
            <div className="cobertura">
                <div className="card">
                    <img src={imageRoubo} alt="" />
                    <h3>Roubo ou furto</h3>
                    <p>Se o carro for roubado ou furtado, conte com a indenização.</p>
                </div>

                <div className="card">

                    <img src={imageMachucado} alt="" />
                    <h3>Danos a terceiros</h3>
                    <p>indenização para danos materiais para terceiros em caso de acidente.</p>
                </div>

            </div>

        </MainSeguro>
    )
}