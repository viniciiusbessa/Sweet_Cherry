import { ContainerAddProduto } from './styled'

import { useHistory } from 'react-router-dom'

export default function AdicionarProduto() {
    const navigation = useHistory();

    const AdmProduto = async () => {
        navigation.push('/administrar-produtos')
    }

    return (
    <ContainerAddProduto>

        <div class="fundo-rodape-add">
            <div class="container-fundo-add">
                <div class="titulo-add">
                    <div class="novo-produto-add">Novo Produto</div>
                    <div class="traco-titulo"></div>
                </div>

                <div class="conteudo-add">
                    <div class="nome-descricao-add">

                        <div class="box-input-nome">
                            <div class="campo-nome">Nome: </div>
                            <input class="input-nome" />
                        </div>

                        <div class="box-textarea-desc">
                            <div class="campo-descricao">Descrição: </div>
                            <textarea class="textarea-descricao"></textarea>
                        </div>

                    </div>

                    <div class="preco-qtds-add">

                        <div class="box-input-preco">
                            <div class="campo-preco">Preço: </div>
                            <input class="input-preco" />
                        </div>

                        <div class="box-input-maxima">
                            <div class="campo-maxima">Qtd máxima: </div>
                            <input class="input-maxima" />
                        </div>

                        <div class="box-input-minima">
                            <div class="campo-minima">Qtd mínima: </div>
                            <input class="input-minima" />
                        </div>

                    </div>

                    <div class="box-adicionar-produto">
                        <div class="img-produto"><img src="../../../assets/images/img-add-adm.png" alt=""/></div>
                        <div class="btn-add-produto"><button onClick={AdmProduto}>Adicionar novo produto</button></div>
                        <div class="btn-voltar"><button onClick={AdmProduto}>Voltar</button></div>
                    </div>

                </div>

                <div class="box-input-link">
                    <div class="campo-link-img">Link imagem: </div>
                    <input class="input-lin-img" />
                </div>
            </div>
        </div>

    </ContainerAddProduto>
    )
}