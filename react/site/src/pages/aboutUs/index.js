import Cabecalho from "../../components/commum/header";
import Rodape from "../../components/commum/footer";

import {ContainerSobreNos} from './styled'

import { useState } from 'react'

import Cookies from 'js-cookie'

import { useHistory } from "react-router";

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function SobreNos() {
    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [usu] = useState(usuarioLogado.nm_cliente);

    return (
        <ContainerSobreNos>
            <div className="fundo-cabecalho">
            <Cabecalho value={usu} />
            </div>
                    <div className="Faixa1_sobreNos">
                        <div className="titulo">
                            Sobre Nós
                        </div>
                        <div className="texto"> 
                            <p> A Sweet Cherry é uma nova loja de doces que realiza vendas via internet, 
                                a Sweet Cherry tem um diferencial, sendo uma loja de doces com atendimento online, com uma unidade física que revende 
                                doces de marcas famosas na região do Interlagos extremo sul da capital de SP.</p>

                            <p> Sua entrega é a domicílio e o pagamento é feito diretamente pelo site, visando facilitar ao máximo para o cliente. 
                                A Sweet Cherry surgiu no período da pandemia, onde as pessoas precisavam ficar em casa, com esse
                                acontecimento o número de entregas por aplicativos e sites cresceram muito e então foi decidido que esse seria 
                                o momento certo para ingressar no mercado juntando a esta nova forma de empreender.</p>
                            </div> 
                        </div>
                        <div className="Faixa2_sobreNos">
                            <div className="titulo">
                                Conheça nosso espaço
                            </div>
                            <div className="imagens">
                                <img src="../../assets/images/loja.jpg" alt=""/>
                                <img src="../../assets/images/loja1.jpg" alt=""/>
                            </div>
                        </div>
            <Rodape/>
        </ContainerSobreNos>
    )
}