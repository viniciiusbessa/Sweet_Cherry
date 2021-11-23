import { ContainerTableRequests } from './styled'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie';

import { useHistory } from 'react-router';


function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function TableRequests(props) {
    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [nmCliente] = useState(usuarioLogado.nm_cliente);

    const [produtos, setProdutos] = useState([]);


    function itensComp() {
        let itens = Cookies.get('carrinho')
        itens = itens !== undefined 
                    ? JSON.parse(itens) 
                    : [];
        setProdutos(itens);
    }

    useEffect(itensComp, []);

    return (
        <ContainerTableRequests>

            <div className="box-pedido-cliente"> 
                <div className="nome-cliente">Número Pedido:{} - Cliente: {nmCliente}  - Data: {}  </div>

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

                {produtos.map((item) => 
                    <tr>
                        <td>{}</td>
                        <td>{item.produto}</td>
                        <td>{item.preco}</td>
                        <td>{item.qtd}</td>
                    </tr>
                )}

                </tbody>

            </table>
        </ContainerTableRequests>
    )
}