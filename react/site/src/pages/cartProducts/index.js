import Cabecalho from "../../components/commum/header";
import Rodape from "../../components/commum/footer";
import TableProduct from "../../components/styled/tableCart";
import { CartProduct } from "./styled";

export default function CarrinhoProdutos(){
    return(
        <CartProduct>
            <Cabecalho/>

            <div class="box-carrinho">

                <div class="titulo-carrinho">Seu carrinho</div>

                <table class="tabela-produtos">

                    <thead class="cabecalho-tabela">
                        <tr>
                        <th>Item</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="doce-carrinho">
                                <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                                <div class="nome-produto">Bolo de chocolate</div>
                            </td>

                            <td>R$19,90</td>
                            <td>1</td>
                            <td class="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
                        </tr>

                        <tr>
                            <td class="doce-carrinho">
                                <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                                <div class="nome-produto">Bolo de chocolate</div>
                            </td>

                            <td>R$19,90</td>
                            <td>1</td>
                            <td class="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
                        </tr>

                        <tr>
                            <td class="doce-carrinho">
                                <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                                <div class="nome-produto">Bolo de chocolate</div>
                            </td>

                            <td>R$19,90</td>
                            <td>1</td>
                            <td class="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
                        </tr>

                        <tr>
                            <td class="doce-carrinho">
                                <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                                <div class="nome-produto">Bolo de chocolate</div>
                            </td>

                            <td>R$19,90</td>
                            <td>1</td>
                            <td class="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
                        </tr>

                        <tr>
                            <td class="doce-carrinho">
                                <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                                <div class="nome-produto">Bolo de chocolate</div>
                            </td>

                            <td>R$19,90</td>
                            <td>1</td>
                            <td class="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="total">
                <button class="botao-total">Total: R$53,90</button>
            </div>

            <div class="botoes">
                <div class="continuar"><button>Continuar comprando</button></div>
                <div class="confirmar"><button>Confirmar compra</button></div>
            </div>

            <div class="box-cartoes">
                <div class="titulo-box">Pague com:</div>
                <div class="box-icones">
                    <div class="icons1">
                        <img src="../../assets/images/pagseguro.svg" alt="" class="icon-pagseguro"/>
                        <img src="../../assets/images/visa.svg" alt="" class="icon-visa"/>
                    </div>
                    <div class="icons2">
                        <img src="../../assets/images/mastercard.svg" alt="" class="icon-mastercard"/>
                        <img src="../../assets/images/elo.svg" alt="" class="icon-elo"/>
                    </div>
                </div>
            </div>

            <Rodape/>

        </CartProduct>
    )
}