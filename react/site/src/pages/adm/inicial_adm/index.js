import { ContainerAdm } from './styled'

import { useHistory } from 'react-router-dom'

export default function InicioAdm() {
    const navigation = useHistory();

    const AdmProduto = async () => {
        navigation.push('/administrar-produtos')
    }

    const AdmPedido = async () => {
        navigation.push('/administrar-pedidos')
    }

    return (
    <ContainerAdm>

        <div className="cabecalho-adm">
            <div className="logo-img-adm"><img src="../../../assets/images/logo-img-adm.svg" alt="" /></div>
            <div className="logo-adm">
                <div className="logo1-adm">Sweet</div>
                <div className="logo2-adm">Cherry</div>
            </div>
        </div>

        <div className="conteudo-adm">
            <div className="texto-escolha-adm">O que deseja fazer?</div>
        </div>

        <div className="btns-adm">
            <div className="btn-add-adm"><button onClick={AdmProduto}>Administrar Produtos</button></div>
            <div className="btn-alt-adm"><button onClick={AdmPedido}>Administrar Pedidos</button></div>
        </div>

    </ContainerAdm>
    )
}