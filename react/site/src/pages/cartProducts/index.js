import Cabecalho from "../../components/commum/header";
import Rodape from "../../components/commum/footer";
import TableProduct from "../../components/styled/tableCart";

import { CartProduct } from "./styled";

import { useHistory } from 'react-router-dom'

export default function CarrinhoProdutos() {
    const navigation = useHistory();

    const confPagamento = async () => {
        navigation.push('/conf_pagamento')
    }

    const contComprar = async () => {
        navigation.push('/destaque')
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
                        <tr>
                            <td className="doce-carrinho">
                                <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                                <div className="nome-produto">Bolo de chocolate</div>
                            </td>

                            <td>R$19,90</td>
                            <td>1</td>
                            <td className="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
                        </tr>

                        <tr>
                            <td className="doce-carrinho">
                                <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                                <div className="nome-produto">Bolo de chocolate</div>
                            </td>

                            <td>R$19,90</td>
                            <td>1</td>
                            <td className="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
                        </tr>

                        <tr>
                            <td className="doce-carrinho">
                                <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                                <div className="nome-produto">Bolo de chocolate</div>
                            </td>

                            <td>R$19,90</td>
                            <td>1</td>
                            <td className="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
                        </tr>

                        <tr>
                            <td className="doce-carrinho">
                                <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                                <div className="nome-produto">Bolo de chocolate</div>
                            </td>

                            <td>R$19,90</td>
                            <td>1</td>
                            <td className="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
                        </tr>

                        <tr>
                            <td className="doce-carrinho">
                                <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                                <div className="nome-produto">Bolo de chocolate</div>
                            </td>

                            <td>R$19,90</td>
                            <td>1</td>
                            <td className="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
                        </tr>
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