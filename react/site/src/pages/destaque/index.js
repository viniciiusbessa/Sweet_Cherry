import Cabecalho from '../../components/cabecalho/index'
import Rodape from '../../components/rodape/index'
import BoxProduto from '../../components/box-produto/index'

import { ContainerDestaque } from './styled'

export default function Destaque() {

    return (
    <ContainerDestaque>
        <Cabecalho />
        
        <div className="conteudo">
            <div className="buscar">
                <input type="text" id="txtBusca" className="busca"/>
                <img src="../../assets/images/ferramenta-lupa 7.png" alt="" />
            </div>
            <div className="box-doces">
                <div className="linhas-nome">
                    <div className="nm-box">Destaques</div>
                    <div className="linhas">
                        <img className="linha-desta" src="../../assets/images/linha-desta.png" alt=""  />
                        <img className="linha-desta" src="../../assets/images/linha-ques.png" alt=""  />
                    </div>
                </div>
                <div className="box-itens">
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                </div>
            </div>

            <div className="box-doces">
                <div className="linhas-nome">
                    <div className="nm-box">Bolos</div>
                    <div className="linhas">
                        <img className="linha-bolos" src="../../assets/images/linha-bolos.png" alt="" />
                    </div>
                </div>
                <div className="box-itens">
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                </div>
            </div>

            <div className="box-doces">
                <div className="linhas-nome">
                    <div className="nm-box">Cupcakes</div>
                    <div className="linhas">
                        <img className="linha-cup" src="../../assets/images/linha-cup.png" alt=""  />
                        <img className="linha-cakes" src="../../assets/images/linha-cakes.png" alt=""  />
                    </div>
                </div>
                <div className="box-itens">
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                </div>
            </div>
            
            <div className="box-doces">
                <div className="linhas-nome">
                    <div className="nm-box">Trufas</div>
                    <div className="linhas">
                        <img className="linha-tru" src="../../assets/images/linha-tru.png" alt=""  />
                        <img className="linha-fas" src="../../assets/images/linha-fas.png" alt=""  />
                    </div>
                </div>
                <div className="box-itens">
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                </div>
            </div>
        </div>

        <Rodape />
    </ContainerDestaque>
    )
}