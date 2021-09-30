import Cabecalho from '../../components/cabecalho/index'
import Rodape from '../../components/rodape/index'

import Estrelas from './stars-avaliation/index'

import { ContainerCompra } from './styled'

import { useHistory } from 'react-router-dom'

export default function Compra() {
    const navigation = useHistory();

    const confPagamento = async () => {
        navigation.push('/conf_pagamento')
    }

    return (
    <ContainerCompra>
        <div className="fundo-cabecalho">
            <Cabecalho />
        </div>

        <div className="container-conteudo">

            <div className="container-compra">

                <div className="compra1-box1">
                    <div className="img-compra">
                        <div className="imagemC-box1"> <img src="../../assets/images/brigadeiro-tela-compra.svg" alt="" /> </div>
                    </div>
                
                    <div className="descricaoC-box1">
                        <div className="desc-titulo1">Descrição</div> 
                        <div className="desc-descricao1">Que tal um brigadeiro com sabor diferenciado?</div>
                        <div className="desc-descricao2">Esse é nossa nova sensação, brigadeiro sabor churros!!</div>
                    </div>

                    <div className="box-estrelinhas">
                        <Estrelas />
                        <Estrelas />
                        <Estrelas />
                        <Estrelas />
                        <Estrelas />
                    </div>

                </div>

                <div className="compra1-box2">
                    <div className="tituloC-box2">
                        Brigadeiro gourmet de churros
                    </div>

                    <div className="preco-produto"> R$ 3,99 </div>

                    <div className="botoesC-1">
                        <div className="botoes-box1">
                            <input className="qtd-prod-input" type="number"/>

                            <button className="Add-carrinho-bt"> <img src="../../assets/images/carrinho.png" alt="" /> Add ao Carrinho </button>
                        </div>

                        <div className="botoes-box2">
                                <button className="Add-favoritos-bt"> <img src="../../assets/images/coracao-favoritos-compra.svg"  alt="" /> Add aos Favoritos</button>
                                <button onClick={confPagamento} className="Confirm-compra1"> Confirmar Compra</button>
                        </div>

                        <div className="botoes-box3">
                            <div className="botao-calc-titl">
                                <div className="titulo-calcular-bt">
                                    <div className="calcular-titulo">Calcular Frete</div>
                                </div>
                                <input className="calcular-input"/>
                                <button className="calcular-bt">Calcular</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cartoes">
                <div className="compra1-box3">
                    <div className="imagens-logo">

                        <div className="tres-primeiros">
                            <div className="cartao1"> <img src="../../assets/images/logos-cartao/pagseguro-logo.svg" alt="" /></div>
                            <div className="cartao2"> <img src="../../assets/images/logos-cartao/visa-logo.svg" alt="" /> </div>
                            <div className="cartao3"> <img src="../../assets/images/logos-cartao/elo-logo1.svg" alt="" /> </div>
                        </div>

                        <div className="dois-primeiros">
                            <div className="cartao4"> <img src="../../assets/images/logos-cartao/pix-bc-logo.svg" alt="" /></div>
                            <div className="cartao5"> <img src="../../assets/images/logos-cartao/mastercard-logo.svg" alt="" /></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Rodape />
    </ContainerCompra>
    )
}