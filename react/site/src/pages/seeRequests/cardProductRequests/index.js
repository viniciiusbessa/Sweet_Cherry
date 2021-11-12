import { ContainerBoxPedido } from './styled'

import { useHistory } from 'react-router-dom'
import { ContainerBoxProduto } from '../../../components/product/cardProduct/styled';

export default function BoxPedido() {
    const navigation = useHistory();

    const VerMais = async () => {
        navigation.push('/compra')
    }

    return (
        <ContainerBoxPedido> 
            <div className="pedido-item-9">
                <div className="imagem_do_bolo-9"><img src="/assets/images/brigadeiro.png" alt="" /></div>
                <div className="informacoes_do_doce-9">
                    <div className="bolo_qtd-9">
                        <div className="nome_doce">Bolo</div>
                        <div className="qtd_doce"> qtd: 2</div>
                    </div>
                    <div className="imagem_carrinho-9"><img src="../../assets/images/carrinho.svg" alt="" /></div>
                    <div className="imagem_coracao-9"><img src="../../assets/images/coracao-favoritos-compra.svg" alt="" /></div>
                </div>
                <div className="preco-9">R$19,00</div>
                <div className="ver_mais-9"><button onClick={VerMais}>Ver mais</button></div>
            </div>
        </ContainerBoxPedido>
    )
}