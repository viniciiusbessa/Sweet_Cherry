import { useState } from "react"
import { ContainerItem } from "./styled"



export default function CartItem(props) {
    const [products, setProducts] = useState(props.info)

    return (
        <ContainerItem>
            <img src={props.imagem} alt=""/>
            <div className="nome-produto">{products.nome}</div>

            <td>{props.preco}</td>
            <td>1</td>
            <td className="lixeira-carrinho"><img src="../../assets/images/lixeira.svg" alt=""/></td>
        </ContainerItem>
    )
}