// import TableProduct from './tableProducts/index'
import { ContainerAdmProduto } from './styled'

import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Api from '../../../service/api';
const api = new Api();



export default function AdministrarProdutos() {
    const navigation = useHistory();

    const [busca, setBusca] = useState('');
    const [products, setProducts] = useState([]);
    // const [product, setProduct] = useState([]);
    const [/* produto */, setProduto] = useState('')
    const [/* preco */, setPreco] = useState('')
    const [/* categoria */, setCategoria] = useState('')
    const [/* descricao */, setDescricao] = useState('')
    const [/* avaliacao */, setAvaliacao] = useState('')
    const [/* imagem */, setImagem] = useState('')
    const [/* idAlterando */, setidAlterando] = useState(0);

    const InicioAdm = async () => {
        navigation.push('/inicio-adm')
    }

    const AddProduto = async () => {
        navigation.push('/add-produto')
    }

    const buscarProduto = async (event) => {
        if(event.type === "keypress" && ( event.charCode !== 13))
        return;

        let r = await api.buscarProdutos(busca);
        setProducts(r);
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

    async function listar() {
        let r = await api.listarProduto();
        setProducts(r);
    }
    
    useEffect(() => {
        listar();
    }, [])

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
                        buscarProduto();
                    }
                }
              },
              {
                label: 'Não'
              }
            ]
        });
    }


    return (
    <ContainerAdmProduto>

        <div className="box-titulo">
            <div className="inicio-adm">
                <button onClick={InicioAdm}>
                    <img src="/assets/images/casinha-inicio-adm.png" alt="" /> Início 
                </button>
            </div>
        </div>

        <div className="titulo-adm2">Administração / Sweet Cherry</div>

        <div className="box-conteudo-adm2">
            <div className="btn-add-adm2"><button onClick={AddProduto}>Adicionar Produto</button></div>
            <div className="barra-pesquisa-adm2">
                <input placeholder="pesquisa" value={busca} onChange={e => setBusca(e.target.value)} onKeyPress={buscarProduto} maxlength="30"/> 
                <div title="pesquisar" className="img-lupa" onClick={buscarProduto}></div>
            </div>
        </div>

    <table>

        <thead>

            <tr>
                <th>Nº</th>
                <th>Nome</th>
                <th>Imagem</th>
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

        {/* {product.length !== 0 &&
                <div>
                    <div className="nm-box">Resultados da Pesquisa</div>
                    <div className="box-itens">
                        {product.map((item) => 
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
        
                            <Link to={{
                                pathname: '/compra',
                                state: item
                            }}>
                                <td className="botao-visivel"><button >mostrar</button></td>
                            </Link>
        
                            <td className="botao-visivel1"> <button onClick={() => alterando(item)}> editar </button> </td>
                            <td className="botao-visivel2"><button onClick={() => remover(item.id) }> deletar </button></td>
                        </tr>
                        )}
                    </div>
                </div>
            } */}

            {products.map((item) => 

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

                    <Link to={{
                        pathname: '/compra',
                        state: item
                    }}>
                        <td className="botao-visivel"><button >mostrar</button></td>
                    </Link>

                    <td className="botao-visivel1"> <button onClick={() => alterando(item)}> editar </button> </td>
                    <td className="botao-visivel2"><button onClick={() => remover(item.id) }> deletar </button></td>
                </tr>

            )}

        </tbody>
    </table>

    </ContainerAdmProduto>
    )
}