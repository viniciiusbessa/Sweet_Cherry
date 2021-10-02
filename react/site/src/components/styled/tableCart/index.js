import { TableCart } from "./styled";

export default function TableProduct(){
    return(
        <TableCart>
            <tr>
                <td class="doce-carrinho">
                    <img src="../../assets/images/bolo-carrinho.svg" alt=""/>
                    <div class="nome-produto">Bolo de chocolate</div>
                </td>

                <td>R$19,90</td>
                <td>1</td>
                <td class="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
            </tr>
        </TableCart>
    )
}