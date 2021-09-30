import Cabecalho from '../../components/header/index'

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
            <div className="mensagem3-compra-finalizada">Confira o status do pedido </div>
            <div className="mensagem4-compra-finalizada">clicando no botão baixo!</div>
            <div className="btn-voltar-inicio-compra-finalizada"><button onClick={perfil}> Acompanhar pedido </button></div>  
        </div>
    </ContainerCompraFinalizada>
    )
}