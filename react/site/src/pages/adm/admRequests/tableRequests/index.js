// import CartItem from '../../../cartProducts/cartItem';

import { ContainerTableRequests } from './styled'

import { useState, useEffect, useRef } from 'react'

import Api from '../../../../service/api'
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';
const api = new Api();

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('carrinho')
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function TableRequests(props) {
    const navigaton = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [produtos, setProdutos] = useState([]);
    const [nmCliente] = useState(usuarioLogado.nm_cliente);


    async function listar() {

        let v = Cookies.get('carrinho');
        setProdutos(v);
    }

    useEffect(() => {
        listar();
    }, [])

    return (
        <ContainerTableRequests>

            <div className="box-pedido-cliente"> 
                <div className="nome-cliente">Número Pedido:{} - Cliente: {nm_cliente}  - Data: {Date.now()}  </div>

                <div className="estado-pedido"> 
                    <div className="acoes-titulo"> Ações/Estado</div>

                    <div className="box-btns"> 
                        <button className="btn1">Preparando</button>
                        <button className="btn2">Enviando</button>
                        <button className="btn3">Entregue</button>
                    </div>
                </div>
            </div>

            <table className="table-filha">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Qtd</th>
                        <th>Valor</th>
                    </tr>
                    
                </thead>

                <tbody>

                    {produtos.map((pedido) => 

                <tr>
                    <td>{pedido.id_venda}</td>
                    <td>{pedido.id_produto}</td>
                    <td>{pedido[pedido.nm_produto]}</td>
                    <td>{props.location.state}</td>
                </tr>
                

                    /* <tr>
                            <td>2</td>
                            <td>CupCake</td>
                            <td>2</td>
                            <td>R$ 19.90</td>
                    </tr> */
                )}

                </tbody>

            </table>
        </ContainerTableRequests>
    )
}