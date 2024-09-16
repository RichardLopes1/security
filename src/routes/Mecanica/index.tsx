import imageLogoWhatsapp from "../../assets/whatsapp.png"
import imageMecanica from "../../assets/mecanica.png"
import imageMecanico from "../../assets/mecanico.png"

import { MainMecanica } from "../../styled";


export default function Mecanica(){
    return(
        <MainMecanica>
            <div className="container">
                <div className="lista">
                    <h1>Não fique na mão... <br />socorro automotivo 24h </h1><br />
                    <p>
                    <ul>
                        <li>auto eletrico</li>
                        <li>Troca de baterias</li>
                        <li> Equipe especializada em Injeção Eletrônica</li>
                        <li>Acompanhamos seu veículo até a nossa oficina, ou até a oficina de sua preferência</li>
                    </ul>
                    </p>
                    
                </div>
                
                <div className="img_mecanico">
                    <img src={imageMecanico} alt="" />
                </div>
            </div>



            <div className="container-grid">
                <div className="card">
                    <h3>...</h3>
                    <p>"Esta mecânica é incrível! com profissionais, sério e sempre explica claramente o que precisa ser feito.
                        A qualidade do trabalho é excelente e os preços são justos. "</p>
                    <div className="nome_cliente">
                        <img src={imageMecanica} alt="" />
                        <span>Richard Lopes,<br />
                            Diadema
                        </span>
                    </div>
                </div>
           



                <div className="card">
                    <h3>...</h3>
                    <p>"Esta mecânica tem uma equipe muito competente e cordial. Sempre me recebem com sorriso e me ajudam a
                        entender o que precisa ser feito. Recomendo sem hesitar!"</p>
                    <div className="nome_cliente">
                        <img src={imageMecanica} alt="" />
                        <span>Isabelle Corsi,<br />
                            Diadema
                        </span>
                    </div>
                </div>



                <div className="card">
                    <h3>...</h3>
                    <p>"Esta mecânica tem uma equipe com profissionais excelentes e que entregam o trabalho perfeitamente.
                        A qualidade do trabalho é impressionante."</p>
                    <div className="nome_cliente">
                    <img src={imageMecanica} alt="" />
                        <span>Luis Santana,<br />
                            São Paulo
                        </span>
                    </div>
                </div>
            


                <div className="card">
                    <h3>...</h3>
                    <p>"O carro não pegava de
                        jeito nenhum, era a bomba
                        de gasolina, levaram o carro
                        para oficina deles e me entregaram o carro no dia seguinte de manhã, ótimo serviço"</p>
                    <div className="nome_cliente">
                    <img src={imageMecanica} alt="" />
                        <span>Juan Santos,<br />
                            Guarulhos
                        </span>
                    </div>
                </div>
            </div>
         
         <div className="sobre">
            <p className="sobre_texto" >
                    Diagnóstico preciso e atendimento rápido e eficiente, aqui temos soluções sob medida para cada
                    necessidade.
                    Equipe de profissionais treinados, competentes e em constante atualização, preparados para atender às
                    mais
                    diversas demandas dos clientes proprietários de veículos.</p>
        
                    <a href= "https://api.whatsapp.com/send?phone=5511954936691" className="logo_whatsapp">
                        <img src={imageLogoWhatsapp} alt="" />
                    </a>
         </div>
    </MainMecanica>

    
    )        
}
