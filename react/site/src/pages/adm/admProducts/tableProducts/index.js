import { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
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
    const loading = useRef(null);

    const navigation = useHistory();


    async function listar() {
        
        let r = await api.listarProduto();
        setProdutos(r);
        loading.current.complete()
    }

    const AddProduto = async () => {
        navigation.push('/add-produto')
    }

    const MostrarProduto = async () => {
        navigation.push('/compra/:id')
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

        navigation.push('/add-produto', item)

         setProduto(item.produto);
         setPreco(item.preco);
         setCategoria(item.categoria);
         setDescricao(item.descricao);
         setAvaliacao(item.avaliacao);
         setImagem(item.imagem);
         setidAlterando(item.id);
    }

    useEffect(() => {
        listar();
    }, [])

    return (
        <ContainerTableProducts>
            <LoadingBar color= "#A4BCFF" ref={loading}/>

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
                        <td>{item.id}</td>
                        <td title={item.produto} className="nomeTb-adm2">
                            {item.produto != null && item.produto.length >= 20
                                ? item.produto.substr(0, 20) + '...'  : item.produto}
                        </td>
                        <td title={item.imagem}>
                            <img src={item.imagem} alt="" style={{ width: '50px', height: '42px' }} />
                        </td>
                        <td>{item.preco}</td>
                        <td>{item.categoria}</td>
                        <td>{item.estoque}</td>
                        <td title={item.descricao}>
                            {item.descricao != null && item.descricao.length >= 25
                                ? item.descricao.substr(0, 25) + '...'  : item.descricao}
                        </td>
                        <td className="botao-visivel"><button onClick={MostrarProduto}>mostrar</button></td>
                        <td className="botao-visivel1"> <button onClick={() => alterando(item)}> editar </button> </td>
                        <td className="botao-visivel2"><button onClick={() => remover(item.id) }> deletar </button></td>
                    </tr>

                )}

            </tbody>

        </ContainerTableProducts>
    )
}