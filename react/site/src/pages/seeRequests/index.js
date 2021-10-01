import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'

import { ContainerVerPedido } from './styled'

import BoxPedido from './cardProductRequests/index'

import { useHistory } from 'react-router-dom'

export default function VerPedido() {
    const navigation = useHistory();

    const Perfil = async () => {
        navigation.push('/perfil')
    }

    return (
    <ContainerVerPedido>
        <div className="fundo-ver-pedido">
            <Cabecalho />
        </div>

        <div className="conteudo-9">
            <div className="box-item-9">
                <div className="item-9">Inspecionar itens</div>
                <button onClick={Perfil} className="btn-voltar-perfil">Voltar para o perfil</button>
            </div>
            <div className="compra-9">Compra 10/10/2021</div>
            <div className="pedidos-9">
                <BoxPedido />
                <BoxPedido />
                <BoxPedido />
                <BoxPedido />
                <BoxPedido />
                <BoxPedido />
                <BoxPedido />
                <BoxPedido />
                <BoxPedido />
                <BoxPedido />
            </div>
        </div>
        
        <Rodape />
    </ContainerVerPedido>
    )
}