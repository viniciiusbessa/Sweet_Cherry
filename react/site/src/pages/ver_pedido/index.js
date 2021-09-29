import Cabecalho from '../../components/cabecalho/index'
import Rodape from '../../components/rodape/index'

import { ContainerVerPedido } from './styled'

import { useHistory } from 'react-router-dom'

export default function Perfil() {
    const navigation = useHistory();

    const VerMais = async () => {
        navigation.push('')
    }

    return (
    <ContainerVerPedido>
        <div className="fundo-ver-pedido">
            <Cabecalho />
        </div>

        <div class="conteudo-9">
            <div class="item-9">Inspecionar itens</div>
            <div class="compra-9">Compra 10/10/2021</div>
            <div class="pedidos-9">
                <div class="pedido-item-9">
                    <div class="imagem_do_bolo-9"><img src="../../assets/images/bolim.png" alt="" /></div>
                    <div class="informacoes_do_doce-9">
                        <div class="bolo_qtd-9">
                            <div class="nome_doce">Bolo</div>
                            <div class="qtd_doce"> qtd:2</div>
                        </div>
                        <div class="imagem_carrinho-9"><img src="../../assets/images/carrinho.png" alt="" /></div>
                        <div class="imagem_coracao-9"><img src="../../assets/images/coracao.png" alt="" /></div>
                    </div>
                    <div class="preco-9">R$19,00</div>
                    <div class="ver_mais-9"><button onClick={VerMais}>Ver mais</button></div>
                </div>

                <div class="pedido-item-9">
                    <div class="imagem_do_bolo-9"><img src="../../assets/images/bolim.png" alt="" /></div>
                    <div class="informacoes_do_doce-9">
                        <div class="bolo_qtd-9">
                            <div class="nome_doce">Bolo</div>
                            <div class="qtd_doce"> qtd:3</div>
                        </div>
                        <div class="imagem_carrinho-9"><img src="../../assets/images/carrinho.png" alt="" /></div>
                      <div class="imagem_coracao-9"><img src="../../assets/images/coracao.png" alt="" /></div>
                    </div>
                    <div class="preco-9">R$20,00</div>
                    <div class="ver_mais-9"><button onClick={VerMais}>Ver mais</button></div>
                </div>

                <div class="pedido-item-9">
                    <div class="imagem_do_bolo-9"><img src="../../assets/images/bolim.png" alt="" /></div>
                    <div class="informacoes_do_doce-9">
                        <div class="bolo_qtd-9">
                            <div class="nome_doce">Bolo</div>
                            <div class="qtd_doce"> qtd:2</div>
                        </div>
                        <div class="imagem_carrinho-9"><img src="../../assets/images/carrinho.png" alt="" /></div>
                      <div class="imagem_coracao-9"><img src="../../assets/images/coracao.png" alt="" /></div>
                    </div>
                    <div class="preco-9">R$19,00</div>
                    <div class="ver_mais-9"><button onClick={VerMais}>Ver mais</button></div>
                </div>

                <div class="pedido-item-9">
                    <div class="imagem_do_bolo-9"><img src="../../assets/images/bolim.png" alt="" /></div>
                    <div class="informacoes_do_doce-9">
                        <div class="bolo_qtd-9">
                            <div class="nome_doce">Bolo</div>
                            <div class="qtd_doce"> qtd:2</div>
                        </div>
                        <div class="imagem_carrinho-9"><img src="../../assets/images/carrinho.png" alt="" /></div>
                      <div class="imagem_coracao-9"><img src="../../assets/images/coracao.png" alt="" /></div>
                    </div>
                    <div class="preco-9">R$19,00</div>
                    <div class="ver_mais-9"><button onClick={VerMais}>Ver mais</button></div>
                </div>

                <div class="pedido-item-9">
                    <div class="imagem_do_bolo-9"><img src="../../assets/images/bolim.png" alt="" /></div>
                    <div class="informacoes_do_doce-9">
                        <div class="bolo_qtd-9">
                            <div class="nome_doce">Bolo</div>
                            <div class="qtd_doce"> qtd:2</div>
                        </div>
                        <div class="imagem_carrinho-9"><img src="../../assets/images/carrinho.png" alt="" /></div>
                      <div class="imagem_coracao-9"><img src="../../assets/images/coracao.png" alt="" /></div>
                    </div>
                    <div class="preco-9">R$19,00</div>
                    <div class="ver_mais-9"><button onClick={VerMais}>Ver mais</button></div>
                </div>

                <div class="pedido-item-9">
                    <div class="imagem_do_bolo-9"><img src="../../assets/images/bolim.png" alt="" /></div>
                    <div class="informacoes_do_doce-9">
                        <div class="bolo_qtd-9">
                            <div class="nome_doce">Bolo</div>
                            <div class="qtd_doce"> qtd:2</div>
                        </div>
                        <div class="imagem_carrinho-9"><img src="../../assets/images/carrinho.png" alt="" /></div>
                      <div class="imagem_coracao-9"><img src="../../assets/images/coracao.png" alt="" /></div>
                    </div>
                    <div class="preco-9">R$19,00</div>
                    <div class="ver_mais-9"><button onClick={VerMais}>Ver mais</button></div>
                </div>

                <div class="pedido-item-9">
                    <div class="imagem_do_bolo-9"><img src="../../assets/images/bolim.png" alt="" /></div>
                    <div class="informacoes_do_doce-9">
                        <div class="bolo_qtd-9">
                            <div class="nome_doce">Bolo</div>
                            <div class="qtd_doce"> qtd:2</div>
                        </div>
                        <div class="imagem_carrinho-9"><img src="../../assets/images/carrinho.png" alt="" /></div>
                      <div class="imagem_coracao-9"><img src="../../assets/images/coracao.png" alt="" /></div>
                    </div>
                    <div class="preco-9">R$19,00</div>
                    <div class="ver_mais-9"><button onClick={VerMais}>Ver mais</button></div>
                </div>

                <div class="pedido-item-9">
                    <div class="imagem_do_bolo-9"><img src="../../assets/images/bolim.png" alt="" /></div>
                    <div class="informacoes_do_doce-9">
                        <div class="bolo_qtd-9">
                            <div class="nome_doce">Bolo</div>
                            <div class="qtd_doce"> qtd:2</div>
                        </div>
                        <div class="imagem_carrinho-9"><img src="../../assets/images/carrinho.png" alt="" /></div>
                      <div class="imagem_coracao-9"><img src="../../assets/images/coracao.png" alt="" /></div>
                    </div>
                    <div class="preco-9">R$19,00</div>
                    <div class="ver_mais-9"><button onClick={VerMais}>Ver mais</button></div>
                </div>
            </div>
        </div>
        
        <Rodape />
    </ContainerVerPedido>
    )
}