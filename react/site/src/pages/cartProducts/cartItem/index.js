import { useState } from "react"
import Counter from "../counter";
import { ContainerItem } from "./styled"

import Cookies from "js-cookie";

export default function CartItem(props) {
    const [products, setProducts] = useState(props.info)

    function alterarQtd(qtd) {
        setProducts({...products, qtd });
        props.onUpdate(products.id, qtd)
      }

    function remover(){
        props.onRemove(products.id);
    }

    return (
        <ContainerItem>
            <td><div className="nome-produto">{products.produto}</div></td> 
            <td>R$ {products.preco}</td>
            <td> <div className="contador"> <Counter onChange={alterarQtd} value={products.qtd}/> </div></td>
            <td className="acao"> <button onClick={remover}> <img src="../../assets/images/lixeira.svg" alt=""/> </button> </td>
        </ContainerItem>
    )
}