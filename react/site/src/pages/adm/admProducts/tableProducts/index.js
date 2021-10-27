import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { ContainerTableProducts } from './styled'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../../service/api'
const api = new Api();

export default function TableProduct() {
    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [avaliacao, setAvaliacao] = useState('')
    const [imagem, setImagem] = useState('')
    const [idAlterando, setidAlterando] = useState(0);

    const navigation = useHistory();


    async function listar() {
        let r = await api.listarProduto();
        setProdutos(r);
    }

    const AddProduto = async () => {
        navigation.push('/add-produto')
    }


    async function remover(id) {
        confirmAlert({
            title: 'Remover produto',
            message: `Tem certeza que deseja remover o produto ${id} ?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                    let r = await api.removerProduto(id);
                    if (r.erro)
                        toast.error(`${r.erro}`);

                    else {
                        toast.dark('✔️ Produto removido!')
                        listar();
                    }
                }
              },
              {
                label: 'Não'
              }
            ]
        });
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

    useEffect(() => {
        listar();
    }, [])

    return (
        <ContainerTableProducts>

            <thead>

                <tr>
                    <th>Nº</th>
                    <th>Nome</th>
                    <th>Img</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Estoque</th>
                    <th>Descrição</th>
                    <th className="campo-btns">Ações</th>
                    <th className="espaco"></th>
                    <th className="espaco"></th>
                </tr>
                
            </thead>

            <tbody>

                {produtos.map((item) => 

                    <tr>
                        <td>{item.id_produto}</td>
                        <td title={item.nm_produto} className="nomeTb-adm2">
                            {item.nm_produto != null && item.nm_produto.length >= 20
                                ? item.nm_produto.substr(0, 20) + '...'  : item.nm_produto}
                        </td>
                        <td title={item.ds_imagem}>
                            <img src={item.ds_imagem} alt="" style={{ width: '50px', height: '42px' }} />
                        </td>
                        <td>{item.vl_produto}</td>
                        <td>{item.nm_categoria}</td>
                        <td>{item.qtd_disponivel_estoque}</td>
                        <td title={item.ds_produto}>
                            {item.ds_produto != null && item.ds_produto.length >= 25
                                ? item.ds_produto.substr(0, 25) + '...'  : item.ds_produto}
                        </td>
                        <td className="botao-visivel"><button onClick={AddProduto}>adicionar</button></td>
                        <td className="botao-visivel1"> <button onClick={() => alterando(item)}> editar </button> </td>
                        <td className="botao-visivel2"><button onClick={() => remover(item.id_produto) }> deletar </button></td>
                    </tr>

                )}

            </tbody>

        </ContainerTableProducts>
    )
}