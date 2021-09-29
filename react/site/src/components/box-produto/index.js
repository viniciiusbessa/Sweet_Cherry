import { ContainerBoxProduto } from "./styled";

export default function BoxProduto (){
    return(
        <ContainerBoxProduto>
            <div class="doces">
                    <div class="imagem-doce"><img src="/assets/images/bolo vermelo.png" alt=""/></div>
                            <div class="sobre_Produto">
                                <div class="nm-doce">Bolo vermelho</div>
                                <div class="icones">
                                    <div class="icone-carrinho"><img src="/assets/images/carrinho.svg" alt=""/></div>
                                    <div class="icone-coracao"><img src="/assets/images/coracao com mais.png" alt=""/></div>
                                </div>
                            </div>

                    <div class="preco">R$19,90</div>
                    <button>Ver mais</button>
            </div>
        </ContainerBoxProduto>
    )
}
