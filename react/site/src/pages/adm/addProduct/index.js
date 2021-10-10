import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContainerAddProduto } from './styled'

import { useHistory } from 'react-router-dom'


import Api from '../../../service/api'
const api = new Api();

export default function AdicionarProduto() {
    const [produto, setProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [avaliacao, setAvaliacao] = useState('')
    const [imagem, setImagem] = useState('')
    const [idAlterando, setidAlterando] = useState(0);

    const navigation = useHistory();


    async function inserir() {
        let r = await api.inserirProduto(produto, preco, categoria, descricao, avaliacao, imagem)
        if (r.erro) {
            toast.error(`❌ ${r.erro}`)
        } else {
            toast.dark('✔️ Produto inserido com sucesso')
            navigation.push('/administrar-produtos')
        }

        limparCampos();
    }

    const AdmProduto = async () => {
        navigation.push('/administrar-produtos')
    }

    function limparCampos() {
        setProduto('');
        setPreco('');
        setCategoria('');
        setDescricao('');
        setAvaliacao('');
        setImagem('');
        setidAlterando(0);
    }

    async function alterando(item) {
        setProduto(item.nm_produto);
        setPreco(item.vl_produto);
        setCategoria(item.nm_categoria);
        setDescricao(item.ds_produto);
        setAvaliacao(item.ds_avaliacao);
        setImagem(item.ds_imagem);
        setidAlterando(item.id_produto);
    }

    return (
    <ContainerAddProduto>
    <ToastContainer />

        <div class="fundo-rodape-add">
            <div class="container-fundo-add">
                <div class="titulo-add">
                    <div class="novo-produto-add">{idAlterando === 0 ? 'Novo Produto' : 'Alterando Produto ' + idAlterando}</div>
                </div>

                <div class="conteudo-add">
                    <div class="nome-descricao-add">

                        <div class="box-input-nome">
                            <div class="campo-nome">Nome: </div>
                            <input class="input-nome" value={produto} onChange={e => setProduto(e.target.value)} />
                        </div>

                        <div class="box-textarea-desc">
                            <div class="campo-descricao">Descrição: </div>
                            <textarea class="textarea-descricao" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
                        </div>

                    </div>

                    <div class="preco-qtds-add">

                        <div class="box-input-preco">
                            <div class="campo-preco">Preço: </div>
                            <input class="input-preco" value={preco} onChange={e => setPreco(e.target.value)} />
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
                        <div class="img-produto"><img src="../../../assets/images/img-add-adm.png" alt="" /></div>
                        <div class="btn-add-produto"><button onClick={inserir}>{idAlterando === 0 ? 'Adicionar Produto' : 'Alterar Produto'}</button></div>
                        <div class="btn-voltar"><button onClick={AdmProduto}>Voltar</button></div>
                    </div>

                </div>

                <div class="box-input-link">
                    <div class="campo-link-img">Link imagem: </div>
                    <input class="input-lin-img" value={imagem} onChange={e => setImagem(e.target.value)} />
                </div>
            </div>
        </div>

    </ContainerAddProduto>
    )
}