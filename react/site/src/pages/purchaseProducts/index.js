import { useState } from 'react'
import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import Estrelas from './stars-avaliation/index'
import { ContainerCompra } from './styled'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

export default function Compra(props) {
    const navigation = useHistory();
    const [products, setProducts] = useState(props.location.state);
    const [qtd, setQtd] = useState(1);

    
    const confPagamento = async () => {
        navigation.push('/conf_pagamento')
    }

    
    function incrementar() {
        if (qtd >= 10)
            return;
        setQtd(qtd+1)
    }

    function decrementar() {
        if (qtd === 0) 
            return;
        setQtd(qtd-1)
    }

    function cartItem(){
        let cart = Cookie.get('cart');
        cart = cart !== undefined
                ? JSON.parse(cart)
                : [];

        if(cart.some(item => item.id === props.id) === false)
            cart.push({...products});

        Cookie.set('cart', JSON.stringify(cart));
        navigation.push('/carrinho')
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
                    </div>

                </div>

                <div className="compra1-box2">
                    <div className="tituloC-box2">
                        Brigadeiro gourmet de churros
                    </div>

                    <div className="preco-produto"> R$ 3,99 </div>

                    <div className="botoesC-1">
                        <div className="botoes-box1">

                            <div className="box-qtd"> 
                                <div className="menos" onClick={decrementar}>
                                    -
                                </div>
                                
                                <div className="quantidade">
                                    {qtd}
                                </div>

                                <div className="mais" onClick={incrementar}>
                                    +
                                </div>
                            </div>

                            <button className="Add-carrinho-bt" onClick={cartItem}> <img src="../../assets/images/carrinho.png" alt=""/> Add ao Carrinho </button>
                        </div>

                        <div className="botoes-box2">
                            <button className="Add-favoritos-bt"> <img src="../../assets/images/coracao-favoritos-compra.svg"  alt="" /> Add aos Favoritos</button>
                            <button onClick={confPagamento} className="Confirm-compra1"> Confirmar Compra</button>
                        </div>

                        <div className="botoes-box3">
                            <div className="botao-calc-titl">
                                
                                <div className="valor-input-fixo">
                                    <div className="frete-fixo">Frete:</div>
                                    <input  readonly="56365" className="calcular-input" value="R$ 5,00"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cartoes">
                <div className="compra1-box3">
                    <div className="imagens-logo">

                        <div className="dois-primeiros">
                            <div className="cartao1"> <img src="../../assets/images/logos-cartao/pagseguro-logo.svg" alt="" /></div>
                            <div className="cartao2"> <img src="../../assets/images/logos-cartao/visa-logo.svg" alt="" /> </div>
                        </div>

                        <div className="dois-primeiros">
                            <div className="cartao3"> <img src="../../assets/images/logos-cartao/elo-logo1.svg" alt="" /> </div>
                            <div className="cartao4"> <img src="../../assets/images/logos-cartao/mastercard-logo.svg" alt="" /></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Rodape />
    </ContainerCompra>
    )
}