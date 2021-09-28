import Cabecalho from '../../components/cabecalho/index'
import Rodape from '../../components/rodape/index'

import ContainerCompraFinalizada from './styled'

export default function CompraFinalizada() {
    return (
    <ContainerCompraFinalizada>
        <Cabecalho />

        <div className="conteudo-compra-finalizada">
            <div className="mensagem1-compra-finalizada">Sua compra foi</div>
            <div className="mensagem2-compra-finalizada">Finalizada com sucesso!</div>
            <div className="mensagem3-compra-finalizada">Enviamos um email para você </div>
            <div className="mensagem4-compra-finalizada">confirmar a sua compra</div>
            <div className="btn-voltar-inicio-compra-finalizada"><a href="../pags_perfil/site copy 11.html"><button> Acompanhar pedido </button></a></div>  
        </div>

        <Rodape />
    </ContainerCompraFinalizada>
    )
}