import Cabecalho from "../../components/commum/header";
import Rodape from "../../components/commum/footer";
// import TableProduct from "../../components/styled/tableCart";

import Cookies from "js-cookie";

import { CartProduct } from "./styled";

import { Link, useHistory } from 'react-router-dom'

import { useEffect, useState } from "react";

import CartItem from "./cartItem";

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function CarrinhoProdutos(props) {
    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [usu] = useState(usuarioLogado.nm_cliente);
    const [products, setProducts] = useState([]);
    const [qtd] = useState(Cookies.get("carrinho").qtd)

    console.log(qtd);

    const quant = products.map (l => {
        return l.qtd 
    });

    const contComprar = async () => {
        navigation.push('/destaque')
    }

    useEffect(uploadCart, [quant]);

    function uploadCart() {
        let carrinho = Cookies.get('carrinho');
        carrinho = carrinho !== undefined 
                      ? JSON.parse(carrinho) 
                      : [];

        console.log(carrinho);

        //Cookies.remove('carrinho');
        setProducts(carrinho);
    }

    function removerProduto(id) {
        let carrinho = products.filter(item => item.id !== id);
        
        Cookies.set('carrinho', JSON.stringify(carrinho));
        setProducts([...carrinho]);
    }

    function alterarProduto(id, qtd) {
        let produtoAlterado = products.filter(item => item.id === id)[0];
        
        produtoAlterado.qtd = qtd
        Cookies.set('carrinho', JSON.stringify(products));
        
        // setProducts([produtoAlterado])
    }

    console.log(Cookies.get("carrinho"));

    const total = products.reduce(getTotal, 0);
    function getTotal(total, item) {
        return total + (item.preco * item.qtd);
    }

    return(
        <CartProduct>
            <div className="fundo-cabecalho">
                <Cabecalho value={usu} />
            </div>

            <div className="box-carrinho">

                <div className="titulo-carrinho">Seu carrinho</div>

                <table className="tabela-produtos">

                    <thead className="cabecalho-tabela">
                        <tr>
                        <th className="nm_item">Item</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((item) =>
                            <CartItem key={item.id}
                                info={item}
                                onUpdate={alterarProduto}
                                onRemove={removerProduto}
                            />
                        )}
                    </tbody>
                </table>
            </div>

            <div className="total">
                <button className="botao-total">Total: R$ {total}</button>
            </div>

            <div className="botoes">
                <div className="continuar"><button onClick={contComprar}>Continuar comprando</button></div>

                <Link to={{
                    pathname: '/conf_pagamento',
                    state: total
                }}>
                <div className="confirmar"><button>Confirmar compra</button></div>
                </Link>
            </div>

            <div className="box-cartoes">
                <div className="titulo-box">Pague com:</div>
                <div className="box-icones">
                    <div className="icons1">
                        <img src="../../assets/images/pagseguro.svg" alt="" className="icon-pagseguro"/>
                        <img src="../../assets/images/visa.svg" alt="" className="icon-visa"/>
                    </div>
                    <div className="icons2">
                        <img src="../../assets/images/mastercard.svg" alt="" className="icon-mastercard"/>
                        <img src="../../assets/images/elo.svg" alt="" className="icon-elo"/>
                    </div>
                </div>
            </div>

            <Rodape/>

        </CartProduct>
    )
}