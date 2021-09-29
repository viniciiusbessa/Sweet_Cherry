import Cabecalho from '../../components/cabecalho/index'
import Rodape from '../../components/rodape/index'
import BoxProduto from '../../components/box-produto/index'

import { ContainerDestaque } from './styled'

import { useHistory } from 'react-router-dom'

export default function Perfil() {
    const navigation = useHistory();

    const compra = async () => {
        navigation.push('/compra')
    }

    return (
    <ContainerDestaque>
        <Cabecalho />
        
        <div class="conteudo">
            <div class="buscar">
                <input type="text" id="txtBusca" class="busca"/>
                <img src="../../assets/images/ferramenta-lupa 7.png" alt="" />
            </div>
            <div class="box-doces">
                <div class="linhas-nome">
                    <div class="nm-box">Destaques</div>
                    <div class="linhas">
                        <img class="linha-desta" src="../../assets/images/linha-desta.png" alt=""  />
                        <img class="linha-desta" src="../../assets/images/linha-ques.png" alt=""  />
                    </div>
                </div>
                <div class="box-itens">
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                </div>
            </div>

            <div class="box-doces">
                <div class="linhas-nome">
                    <div class="nm-box">Bolos</div>
                    <div class="linhas">
                        <img class="linha-bolos" src="../../assets/images/linha-bolos.png" alt="" />
                    </div>
                </div>
                <div class="box-itens">
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                </div>
            </div>

            <div class="box-doces">
                <div class="linhas-nome">
                    <div class="nm-box">Cupcakes</div>
                    <div class="linhas">
                        <img class="linha-cup" src="../../assets/images/linha-cup.png" alt=""  />
                        <img class="linha-cakes" src="../../assets/images/linha-cakes.png" alt=""  />
                    </div>
                </div>
                <div class="box-itens">
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                    <BoxProduto />
                </div>
            </div>
            
            <div class="box-doces">
                <div class="linhas-nome">
                    <div class="nm-box">Trufas</div>
                    <div class="linhas">
                        <img class="linha-tru" src="../../assets/images/linha-tru.png" alt=""  />
                        <img class="linha-fas" src="../../assets/images/linha-fas.png" alt=""  />
                    </div>
                </div>
                <div class="box-itens">
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