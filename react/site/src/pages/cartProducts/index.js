import Cabecalho from "../../components/commum/header";
import Rodape from "../../components/commum/footer";
// import TableProduct from "../../components/styled/tableCart";
import Cookies from "js-cookie";
import { CartProduct } from "./styled";
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from "react";
import CartItem from "./cartItem";

export default function CarrinhoProdutos() {
    const navigation = useHistory();

    const [products, setProducts] = useState([])

    const confPagamento = async () => {
        navigation.push('/conf_pagamento')
    }

    const contComprar = async () => {
        navigation.push('/destaque')
    }

    useEffect(uploadCart, []);

    function uploadCart() {
        let carrinho = Cookies.get('carrinho');
        carrinho = carrinho !== undefined 
                      ? JSON.parse(carrinho) 
                      : [];
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
        Cookies.set('carrinho', JSON.stringify(produtoAlterado));
    }


    return(
        <CartProduct>
            <div className="fundo-cabecalho">
                <Cabecalho/>
            </div>

            <div className="box-carrinho">

                <div className="titulo-carrinho">Seu carrinho</div>

                <table className="tabela-produtos">

                    <thead className="cabecalho-tabela">
                        <tr>
                        <th>Item</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map(item =>
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
                <button className="botao-total">Total: R$53,90</button>
            </div>

            <div className="botoes">
                <div className="continuar"><button onClick={contComprar}>Continuar comprando</button></div>
                <div className="confirmar"><button onClick={confPagamento}>Confirmar compra</button></div>
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