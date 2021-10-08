import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import BoxProduto from '../../components/product/cardProduct/index'

import { ContainerNovidades } from './styled'

export default function Novidades() {

    return (
    <ContainerNovidades>
        <Cabecalho />

        <div class="box-text">
            <div className="box-bem-vindo">
                <div class="bem-vindo"> Bem-vindo a nossa tela</div>
                <div class="bem-vindo"> de Novidades</div>
            </div>
            <div className="box-descricao">
                <div class="descricao">Aqui nossos novos produtos aparecem</div>
                <div class="descricao">prontinhos para você aproveitar</div>
            </div>
        </div>

        <div className="box-doces">
            <BoxProduto />
            <BoxProduto />
            <BoxProduto />
            <BoxProduto />
            <BoxProduto />
            <BoxProduto />
            <BoxProduto />
            <BoxProduto />
        </div>

        <Rodape />
    </ContainerNovidades>
    )
}