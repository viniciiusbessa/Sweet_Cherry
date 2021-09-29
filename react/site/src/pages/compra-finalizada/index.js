import Cabecalho from '../../components/cabecalho/index'

import { ContainerCompraFinalizada } from './styled'

import { useHistory } from 'react-router-dom'

export default function CompraFinalizada() {
    const navigation = useHistory();

    const perfil = async () => {
        navigation.push('/perfil')
    }

    return (
    <ContainerCompraFinalizada>
        <div className="fundo-cabecalho">
            <Cabecalho />
        </div>

        <div className="conteudo-compra-finalizada">
            <div className="mensagem1-compra-finalizada">Sua compra foi</div>
            <div className="mensagem2-compra-finalizada">Finalizada com sucesso!</div>
            <div className="mensagem3-compra-finalizada">Enviamos um email para você </div>
            <div className="mensagem4-compra-finalizada">confirmar a sua compra</div>
            <div className="btn-voltar-inicio-compra-finalizada"><button onClick={perfil}> Acompanhar pedido </button></div>  
        </div>
    </ContainerCompraFinalizada>
    )
}