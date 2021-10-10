import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { ContainerTableProducts } from './styled'

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
                    <th>Qtd Máx.</th>
                    <th>Qtd Min.</th>
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
                        <td title={item.nm_produto} className="nomeTb-adm2">{item.nm_produto}</td>
                        <td>{item.ds_imagem}</td>
                        <td>{item.vl_produto}</td>
                        <td>8 pedaços(s)</td>
                        <td>1 pedaço(s)</td>
                        <td className="descricaoTb-adm2">{item.ds_avaliacao}</td>
                        <td className="botao-visivel"><button onClick={AddProduto}>adicionar</button></td>
                        <td className="botao-visivel1"> <button onClick={() => alterando(item), AddProduto}>editar</button> </td>
                        <td className="botao-visivel2"><button>deletar</button></td>
                    </tr>

                )}

            </tbody>

        </ContainerTableProducts>
    )
}