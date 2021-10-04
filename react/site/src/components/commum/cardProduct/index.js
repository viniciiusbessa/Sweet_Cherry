import { ContainerBoxProduto } from "./styled";

import { useHistory } from 'react-router-dom'


export default function BoxProduto (){

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
                        <div className="imagem-doce"><img src="/assets/images/bolo vermelo.png" alt=""/></div>
                                <div className="sobre_Produto">
                                    <div className="nm-doce">Bolo vermelho</div>
                                    <div className="icones">
                                        <div className="icone-carrinho" onClick={carrinho}><img src="/assets/images/carrinho.svg" alt=""/></div>
                                        <div className="icone-coracao" onClick={favoritos}><img src="/assets/images/coracao-favoritos-compra.svg" alt=""/></div>
                                    </div>
                                </div>

                        <div className="preco">R$19,90</div>
                    <div className="button"> <button onClick={compra}>Ver mais</button> </div>
                </div>
            </ContainerBoxProduto>
        </div>
    )
}
