import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

// import CartItem from '../../../cartProducts/cartItem';

import { ContainerTableRequests } from './styled'

export default function TableRequests(props) {
    const [products, setProducts] = useState([]);
    const [product] = useState(props.info)


    return (
        <ContainerTableRequests>

            <div className="box-pedido-cliente"> 
                <div className="nome-cliente">Número Pedido: {products.id_pedido} - Cliente: {products.nm_cliente} - Data: {products.dt_pedido} </div>

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

                {products.map((item) =>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.produto}</td>
                      <td>{item.preco}</td>
                  </tr>
                )}

                    {/* <tr>
                        <td>2</td>
                        <td>CupCake</td>
                        <td>2</td>
                        <td>R$ 19.90</td>
                    </tr> */}

                </tbody>

            </table>
        </ContainerTableRequests>
    )
}