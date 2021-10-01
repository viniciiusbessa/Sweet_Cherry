import Cabecalho from '../../components/header/index'
import Rodape from '../../components/footer/index'
import BoxProduto from '../../components/commum/cardProduct/index'

import { ContainerDestaque } from './styled'

export default function Destaque() {

    return (
    <ContainerDestaque>
        <Cabecalho />
        
        <div className="conteudo">
            <div className="buscar">
                <input type="text" id="txtBusca" className="busca"/>
                <img src="../../assets/images/ferramenta-lupa 7.png" alt="" />
            </div>

            <div className="nm-box">Destaques</div>
            <div className="box-itens">
                <BoxProduto />
                <BoxProduto />
                <BoxProduto />
                <BoxProduto />
            </div>

            <div className="nm-box">Bolos</div>
            <div className="box-itens">
                <BoxProduto />
                <BoxProduto />
                <BoxProduto />
                <BoxProduto />
            </div>
            
            <div className="nm-box">Cupcakes</div>
            <div className="box-itens">
                <BoxProduto />
                <BoxProduto />
                <BoxProduto />
                <BoxProduto />
            </div>
            
            <div className="nm-box">Trufas</div>
            <div className="box-itens">
                <BoxProduto />
                <BoxProduto />
                <BoxProduto />
                <BoxProduto />
            </div>

        </div>

        <Rodape />
    </ContainerDestaque>
    )
}