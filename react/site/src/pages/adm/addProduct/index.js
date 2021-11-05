import { useEffect, useState, useRef } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContainerAddProduto } from './styled'

import { InputAdm, TextAreaAdm } from '../../../components/styled/inputsAdm'

import { useHistory } from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar';


import Api from '../../../service/api'
const api = new Api();

export default function AdicionarProduto(props) {
    
    const [produto, setProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [avaliacao, setAvaliacao] = useState('')
    const [estoque, setEstoque] = useState('')
    const [imagem, setImagem] = useState('')
    const [idAlterando, setidAlterando] = useState(0);
    const loading = useRef(null);

    const navigation = useHistory();

    loading.current.complete()


    useEffect(() => {
        const produtoInfo = props.location.state;
        if (produtoInfo) {
            setProduto(produtoInfo.produto);
            setPreco(produtoInfo.preco);
            setCategoria(produtoInfo.categoria);
            setDescricao(produtoInfo.descricao);
            setAvaliacao(produtoInfo.avaliacao);
            setEstoque(produtoInfo.estoque);
            setImagem(produtoInfo.imagem);
            setidAlterando(produtoInfo.id);   
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    async function inserir() {
        if (idAlterando !== 0) {
            let alter = await api.alterarProduto(idAlterando, produto, preco, categoria, avaliacao, descricao, estoque, imagem);
            
            if (alter.erro)
                toast.error(`❌ ${alter.erro}`)

            else {
                toast.dark('✔️ Produto alterado com sucesso');
                navigation.push('/administrar-produtos')
            }

        } else {
            let r = await api.inserirProduto(produto, preco, categoria, avaliacao, descricao, estoque, imagem)
            
            if (r.erro) {
                toast.error(`❌ ${r.erro}`)

            } else {
                toast.dark('✔️ Produto inserido com sucesso')
                navigation.push('/administrar-produtos')
            }
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
        setEstoque('');
        setImagem('');
        setidAlterando(0);
    }

    return (
    <ContainerAddProduto>
    <ToastContainer />
    <LoadingBar color= "#A4BCFF" ref={loading}/>

        <div className="fundo-rodape-add">
            <div className="container-fundo-add">
                <div className="titulo-add">
                    <div className="novo-produto-add">{idAlterando === 0 ? 'Novo Produto' : 'Alterando Produto ' + idAlterando}</div>
                </div>

                <div className="conteudo-add">
                    <div className="nome-descricao-add">

                        <div className="box-input-nome">
                            <div className="campo-nome-input">Nome: </div>
                            <InputAdm value={produto} onChange={e => setProduto(e.target.value)} />
                        </div>

                        <div className="box-input-categoria">
                            <div className="campo-nome-input">Categoria: </div>
                            <InputAdm value={categoria} onChange={e => setCategoria(e.target.value)} />
                        </div>

                        <div className="box-textarea-desc">
                            <div className="campo-nome-input">Descrição: </div>
                            <TextAreaAdm value={descricao} onChange={e => setDescricao(e.target.value)} />
                        </div>

                    </div>

                    <div className="box-adicionar-produto">

                        <div className="preco-qtds-add">

                            <div className="box-input">
                                <div className="campo-nome-input">Preço: </div>
                                <InputAdm value={preco} onChange={e => setPreco(e.target.value)} />
                            </div>

                            <div className="box-input">
                                <div className="campo-nome-input">Avaliação: </div>
                                <InputAdm value={avaliacao} onChange={e => setAvaliacao(e.target.value)} />
                            </div>

                            <div className="box-input">
                                <div className="campo-nome-input">Qtd estoque: </div>
                                <InputAdm value={estoque} onChange={e => setEstoque(e.target.value)} />
                            </div>

                            <div className="box-input-imagem">
                                <div className="campo-nome-input">Link imagem: </div>
                                <InputAdm value={imagem} onChange={e => setImagem(e.target.value)} />
                            </div>

                        </div>

                        <div className="box-botoes">
                            <div className="btn-voltar"><button onClick={AdmProduto}>Voltar</button></div>
                            <div className="btn-add-produto"><button onClick={inserir}>{idAlterando === 0 ? 'Adicionar Novo Produto' : 'Alterar Produto'}</button></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </ContainerAddProduto>
    )
}