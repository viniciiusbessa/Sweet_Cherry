import { useState } from 'react'
import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import Estrelas from './stars-avaliation/index'
import { ContainerCompra } from './styled'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function Compra(props) {
    const navigation = useHistory();

    const [products, setProducts] = useState(props.location.state);

    const confPagamento = async () => {
        navigation.push('/conf_pagamento')
    }

    function cartItem(){
        let carrinho = Cookies.get('carrinho');
        carrinho = carrinho !== undefined 
                    ? JSON.parse(carrinho) 
                    : [];
                    
        if (carrinho.some(item => item.id === products.id) === false)
            carrinho.push({...products, qtd: 1 });
     
        Cookies.set('carrinho', JSON.stringify(carrinho));
        
        navigation.push('/carrinho');
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
                        <div className="imagemC-box1"> <img src={products.imagem} alt="" /> </div>
                    </div>
                
                    <div className="descricaoC-box1">
                        <div className="desc-titulo1">Descrição</div> 
                        <div className="desc-descricao1">{products.descricao}</div>
                        <div className="desc-descricao2">{products.descricao}</div>
                    </div>

                    <div className="box-estrelinhas">
                        <Estrelas />
                    </div>

                </div>

                <div className="compra1-box2">
                    <div className="tituloC-box2">
                        {products.produto}
                    </div>

                    <div className="preco-produto"> R$ {products.preco} </div>

                    <div className="botoesC-1">
                        <div className="botoes-box1">
                
                            <button className="Add-favoritos-bt"> <img src="../../assets/images/coracao-favoritos-compra.svg"  alt="" /> Add aos Favoritos</button>

                            <button className="Add-carrinho-bt" onClick={cartItem}> 
                                <img src="../../assets/images/carrinho.png" alt=""/> 
                                Add ao Carrinho 
                            </button>
                            
                        </div>

                        <div className="botoes-box2">
                            <button onClick={confPagamento} className="Confirm-compra1"> Confirmar Compra</button>
                        </div>

                        <div className="botoes-box3">
                            <div className="botao-calc-titl">
                                
                                <div className="valor-input-fixo">
                                    <div className="frete-fixo">Frete:</div>
                                    <input readonly="56365" className="calcular-input" value="R$ 5,00"/>
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