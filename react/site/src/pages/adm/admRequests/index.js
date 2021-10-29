import { ContainerAdmPedidos } from './styled'

import { useHistory } from 'react-router-dom'

export default function AdministrarPedidos() {
    const navigation = useHistory();

    const InicioAdm = async () => {
        navigation.push('/inicio-adm')
    }

    return (
    <ContainerAdmPedidos>

        <div class="box-titulo">
            <div class="inicio-adm">
                <button onClick={InicioAdm}><img src="../../../assets/images/casinha-inicio-adm.png" alt="" /> Início  </button>
            </div>                          
        </div>
        <div class="titulo-adm2">Administração / Sweet Cherry</div>

        <div class="box-conteudo-adm2">
            <div class="btn-add-adm2"><button>Administração Pedidos</button></div>
            <div class="barra-pesquisa-adm2">
                <input placeholder="pesquisa" />
                <div title="pesquisar" class="img-lupa"></div>
            </div>
        </div>

        <div className="table-pai">

            <div className="box-pedido-cliente"> 
                <div className="nome-cliente">Número Pedido: 20 - Cliente: Fulado - Data: 30/12/2021 </div>

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
                        <td>1</td>
                        <td>CupCake</td>
                        <td>2</td>
                        <td>R$ 19.90</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>CupCake</td>
                        <td>2</td>
                        <td>R$ 19.90</td>
                    </tr>

                </tbody>

            </table>
        </div>

        <div className="table-pai">

            <div className="box-pedido-cliente"> 
                <div className="nome-cliente">Número Pedido: 20 - Cliente: Fulado - Data: 30/12/2021 </div>

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
                        <td>1</td>
                        <td>CupCake</td>
                        <td>2</td>
                        <td>R$ 19.90</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>CupCake</td>
                        <td>2</td>
                        <td>R$ 19.90</td>
                    </tr>

                </tbody>

            </table>
        </div>
        
    </ContainerAdmPedidos>
    )
}