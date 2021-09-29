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
        <ContainerBoxProduto>
            <div class="doces">
                    <div class="imagem-doce"><img src="/assets/images/bolo vermelo.png" alt=""/></div>
                            <div class="sobre_Produto">
                                <div class="nm-doce">Bolo vermelho</div>
                                <div class="icones">
                                    <div class="icone-carrinho" onClick={carrinho}><img src="/assets/images/carrinho.svg" alt=""/></div>
                                    <div class="icone-coracao" onClick={favoritos}><img src="/assets/images/coracao.png" alt=""/></div>
                                </div>
                            </div>

                    <div class="preco">R$19,90</div>
                    <button onClick={compra}>Ver mais</button>
            </div>
        </ContainerBoxProduto>
    )
}
