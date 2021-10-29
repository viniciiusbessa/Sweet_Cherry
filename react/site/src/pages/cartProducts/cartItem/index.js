import { useState } from "react"
import Counter from "../counter";
import { ContainerItem } from "./styled"



export default function CartItem(props) {
    const [products, setProducts] = useState(props.info)

    function remover(){
        props.onRemove(products.id);
    }

    return (
        <ContainerItem>
            <td><div className="nome-produto">{products.produto}</div></td> 
            <td>{products.preco}</td>
            <td> <Counter value={products.id}/> </td>
            <td className="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt="" onClick={remover}/></td>
        </ContainerItem>
    )
}