import imageBateria from "../../assets/bateria-de-carro.png"
import imageColisao from "../../assets/colisao-de-carro.png"
import imagePerdas from "../../assets/perdas.png"
import imageCombustivel from "../../assets/combustivel.png"
import { MainGuincho } from "../../styled"



export default function Guincho(){
    return(
        <MainGuincho>
            
            <div className="img_guincho">
                <h2>Security Guinchos</h2>
                <span className="subtitulo_guincho">Serviço rapido</span>
                <a href="https://api.whatsapp.com/send?phone=5511954936691"><button className="botao_whatsapp">Solicite pelo whatsapp</button></a>
            </div>

  

            <div className="Container">
                <div className="card">
                    <img src={imageColisao} alt="" />
                    <h3>Guincho e Reboque</h3>
                </div>

                <div className="card">
                    <img src={imagePerdas} alt="" />
                    <h3>Perdas e Acidentes</h3>
                    <p className="paragrafo_card">Estamos 24 horas a disposição para o seu atendimento</p>
                </div>

                <div className="card">
                    <img src={imageCombustivel} alt="" />
                    <h3>Pane Seca</h3>
                    <p className="paragrafo_card">Acabou a gasolina e precisa ser guinchado?</p>
                </div>

                <div className="card">
                    <img src={imageBateria} alt="" />
                    <h3>Carro sem Bateria</h3>
                    <p className="paragrafo_card">A batería descarregou ou arriou? Sem crise, solicite nosso guincho!</p>
                </div>
            </div>
   
  

            <div className="servicos_rapido">
                <h4>Serviços 24 Horas</h4>
                <p>Em poucos segundos listamos os profissionais adequados e disponíveis próximos do local de atendimento, e você
                    tem
                    a liberdade para escolher se prefere o mais barato, com menor prazo de chegada ou o melhor avaliado. Além
                    disso
                </p>
            </div>

        <map/>
            
        </MainGuincho>
    )}    
