import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";

import {ContainerSobreNos} from './styled'

export default function SobreNos() {
    return (
        <ContainerSobreNos>
            <Cabecalho/>
                    <div class="Faixa1_sobreNos">
                        <div class="titulo">
                            Sobre Nós
                        </div>
                        <div class="texto"> 
                            <p> A Sweet Cherry é uma nova loja de doces que realiza transações entre seus consumidores via internet, 
                                a Sweet Cherry tem diferencial, sendo uma loja de doces 100% online, sem uma unidade física que revende 
                                doces de marcas famosas na região do Interlagos extremo sul da capital de SP.</p>

                            <p> Sua entrega é a domicílio e o pagamento é feito diretamente pelo site, visando facilitar ao máximo para o cliente. 
                                A Sweet Cherry surgiu no período da pandemia, onde as pessoas precisavam ficar em casa, com esse
                                acontecimento o número de entregas por aplicativos e sites cresceram muito e então foi decidido que esse seria 
                                o momento certo para ingressar no mercado juntando a esta nova forma de empreender.</p>
                            </div> 
                        </div>
                        <div class="Faixa2_sobreNos">
                            <div class="titulo">
                                Conheça nosso espaço
                            </div>
                            <div class="imagens">
                                <img src="../../assets/images/espaço_sweet Cherry.png" alt=""/>
                                <img src="../../assets/images/espaço_sweet Cherry (2).png" alt=""/>
                            </div>
                        </div>
            <Rodape/>
        </ContainerSobreNos>
    )
}