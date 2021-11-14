// import CartItem from '../../../cartProducts/cartItem';

import { ContainerTableRequests } from './styled'

export default function TableRequests(props) {
    return (
        <ContainerTableRequests>

            <div className="box-pedido-cliente"> 
                <div className="nome-cliente">Número Pedido: - Cliente:  - Data:  </div>

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

                <tr>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                </tr>
                

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