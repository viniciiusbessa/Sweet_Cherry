import { ContainerBoxProduto } from "./styled";

import { useHistory } from 'react-router-dom'


export default function BoxProduto (props){
    const navigation = useHistory();
    
    const compra = async () => {
        navigation.push('/compra')
    }

    const carrinho = async () => {
        navigation.push('/carrinho')
    }

    const favoritos = async () => {
        navigation.push('/favoritos')
    }


    return(
        <div className='hoverProduto'>
            <ContainerBoxProduto>
                <div className="doces">

                    <div className="imagem-doce"> <img src={props.ds_imagem} alt="" /> </div>
                    <div className="nm-doce">{props.nome}</div>

                    <div className="produto">

                        <div className="preco">{props.preco}</div>
                        <div className="icones">
                            <div className="icone-carrinho" onClick={carrinho}><img src="/assets/images/carrinho.svg" alt=""/></div>
                            <div className="icone-coracao" onClick={favoritos}><img src="/assets/images/coracao-favoritos-compra.svg" alt=""/></div>
                        </div>
                        </div>
                    <div className="button"> <button onClick={compra}>Ver mais</button> </div>
                </div>
            </ContainerBoxProduto>
        </div>
    )
}
