import { Link } from "react-router-dom";

//import de fotos

import imageCardCarro from '../../assets/carros.png'
import imageGuincho from '../../assets/guincho (2).png'
import imageMecanica from "../../assets/mecanico.png"

import { DivCaixa2, DivCards, DivContainer, DivTitulo, MainGeral, SectionDiferencial, } from "../../styled"


export default function Home(){
    return(
        <MainGeral>
            <SectionDiferencial className="diferencial">
                <h1 id="Titulo_diferencial">Nosso Diferencial </h1> 
                <br />
                <p>Security é uma empresa de seguros que se destaca pela sua abordagem integral e personalizada para proteger seus clientes
                contra riscos diversos. Com uma equipe especializada e tecnologia avançada, a Security oferece soluções de seguros adaptadas
                às necessidades específicas de cada cliente, garantindo uma cobertura completa e adequada. Além disso, a empresa valoriza a 
                transparência e a confiança, proporcionando informações claras sobre os produtos e serviços oferecidos, além de um atendimento
                ao cliente excepcional. Por fim, a Security compromete-se com a sustentabilidade, buscando sempre práticas que minimizem o impacto
                ambiental de suas operações.     
                </p>
                <p>A Security não apenas protege bens materiais, mas também investe na segurança emocional dos seus clientes, oferecendo suporte
                    psicológico em casos de sinistros. Isso demonstra o compromisso da empresa com o bem-estar geral do cliente, além da simples 
                    cobertura financeira. A empresa também se diferencia por sua capacidade de adaptar-se rapidamente às mudanças no mercado e nas
                    necessidades dos consumidores, lançando constantemente novos produtos e serviços que respondam às demandas emergentes. Além disso, 
                    a Security privilegia a digitalização de seus processos, tornando a contratação e gestão de seguros mais ágil e 
                    acessível para todos, sem excluir aqueles que vivem em áreas remotas ou menos desenvolvidas. Por fim, a empresa mantém um forte
                    senso de comunidade, participando ativamente de eventos locais e iniciativas sociais, reforçando seu papel como parte integrante 
                    das comunidades onde opera.

                
                </p>
            </SectionDiferencial>
            <br /><br />
            <DivTitulo className='titulo_servicos'>
                <h2 >Nossos serviços</h2>
            </DivTitulo>
            <br /><br />
            <DivContainer className="container-grid">
                <Link to ="/Seguro" className="Links-cards" >
                    <DivCards className="card">
                        <h3>Seguro</h3>
                        <img src={imageCardCarro} alt="" />
                    
                    </DivCards>
                </Link>

                
                <Link to="/Guincho" className="Links-cards">
                    <DivCards className="card">
                        <h3>Guincho</h3>
                        <img src={imageGuincho} alt="" />
                    </DivCards>
                </Link>

                <Link to="/Mecanica" className="Links-cards">
                    <DivCards className="card">
                        <h3>Mecanica</h3>
                        <img src={imageMecanica} alt="" />
                    </DivCards>
                    </Link>
                
                </DivContainer>                 
                <DivCaixa2 className="caixa2">
                    <h3 className="texto1">Nossos Beneficios</h3>
                    <p className="beneficios">
                        <strong>Tecnologia Avançada:</strong> <br />
                        • A utilização de tecnologias modernas na prestação de serviços de segurança, como sistemas anti-arrastão
                        e portarias remotas, permite uma resposta rápida e eficaz a situações de risco, melhorando a segurança geral.
                    </p>
                    <p className="beneficios">
                        <strong>Personalização dos Serviços:</strong> <br />
                        • A Security pode oferecer soluções de segurança personalizadas para cada cliente,
                        adaptando-se às necessidades específicas de cada caso, garantindo uma proteção mais eficaz e relevante.
                    </p>
                    <p className="beneficios">
                        <strong>Atendimento a Diversos Setores:</strong><br />
                        • A Security é preparada para atender a uma ampla gama de setores, incluindo empresas, condomínios e eventos. Isso demonstra 
                        a versatilidade e a capacidade da empresa de adaptar seus serviços de segurança às diversas necessidades e requisitos de cada 
                        segmento.
                    </p>
                    <p className="beneficios">
                        <strong>Assistência 24 Horas:</strong><br />
                        • Assistência em caso de sinistro, como panificadora, troca de pneus, remoção do veículo, entre outros serviços, 
                        disponibilizados 24 horas por dia,7 dias por semana. Isso proporciona uma sensação de segurança e apoio em momentos de emergência.
                    </p>
                    <p className="beneficios">
                        <strong>Cobertura de Danos a Terceiros:</strong><br />
                        • Proteção para reparos ou substituição de veículos de terceiros danificados em um acidente envolvendo o veículo segurado. 
                        Isso ajuda a evitar complicações legais e custos adicionais decorrentes de danos a propriedade de terceiros.
                    </p>
                    <p className="beneficios">
                        <strong>Carro Reserva:</strong><br />
                        •Oferece a opção de ter um carro reserva disponibilizado temporariamente após um sinistro, permitindo que o segurado continue 
                        com suas atividades diárias sem interrupções significativas.Isso é particularmente útil para quem depende do carro para trabalho ou negócios.
                    </p>
                    <p className="beneficios">
                        <strong>Cobertura Internacional:</strong><br />
                        • Opção de extensão da cobertura internacional, para proteção em viagens fora do país, o que é essencial para quem frequentemente viaja ou possui veículos
                        registrados em outro país.
                    </p>
                    </DivCaixa2>
                
                
       
        </MainGeral>
    )
}