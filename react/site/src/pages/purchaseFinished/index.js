import Cabecalho from '../../components/commum/header/index'

import { ContainerCompraFinalizada } from './styled'

import { useHistory } from 'react-router-dom'

import { useState } from 'react'

import Cookies from 'js-cookie'

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function CompraFinalizada() {
    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [usu] = useState(usuarioLogado.nm_cliente);

    const perfil = async () => {
        navigation.push('/perfil')
    }

    return (
    <ContainerCompraFinalizada>
        <div className="fundo-cabecalho">
            <Cabecalho value={usu} />
        </div>

        <div className="conteudo-compra-finalizada">
            <div className="mensagem1-compra-finalizada">Sua compra foi</div>
            <div className="mensagem2-compra-finalizada">Finalizada com sucesso!</div>
            <div className="mensagem3-compra-finalizada">Confira o status do pedido </div>
            <div className="mensagem4-compra-finalizada">clicando no botão baixo!</div>
            <div className="btn-voltar-inicio-compra-finalizada"><button onClick={perfil}> Acompanhar pedido </button></div>  
        </div>
    </ContainerCompraFinalizada>
    )
}