import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'

import { ContainerVerPedido } from './styled'

import { useState } from 'react'

import BoxPedido from './cardProductRequests/index'

import Cookies from 'js-cookie'

import { useHistory } from 'react-router-dom'

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function VerPedido() {
    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [usu] = useState(usuarioLogado.nm_cliente);

    const Perfil = async () => {
        navigation.push('/perfil')
    }

    return (
    <ContainerVerPedido>
        <div className="fundo-ver-pedido">
            <Cabecalho value={usu} />
        </div>

        <div className="conteudo-9">
            <div className="box-item-9">
                <div className="item-9">Inspecionar itens</div>
                <button onClick={Perfil} className="btn-voltar-perfil">Voltar para o perfil</button>
            </div>
            <div className="compra-9">Compra 10/10/2021</div>
            <div className="pedidos-9">
                <BoxPedido />
            </div>
        </div>
        
        <Rodape />
    </ContainerVerPedido>
    )
}