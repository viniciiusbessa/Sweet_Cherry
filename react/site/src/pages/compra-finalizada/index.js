import Cabecalho from '../../components/cabecalho/index'

import { ContainerCompraFinalizada } from './styled'

export default function CompraFinalizada() {
    return (
    <ContainerCompraFinalizada>
        <Cabecalho />

        <div className="conteudo-compra-finalizada">
            <div className="mensagem1-compra-finalizada">Sua compra foi</div>
            <div className="mensagem2-compra-finalizada">Finalizada com sucesso!</div>
            <div className="mensagem3-compra-finalizada">Enviamos um email para você </div>
            <div className="mensagem4-compra-finalizada">confirmar a sua compra</div>
            <div className="btn-voltar-inicio-compra-finalizada"><button> Acompanhar pedido </button></div>  
        </div>
    </ContainerCompraFinalizada>
    )
}