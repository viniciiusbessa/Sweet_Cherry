import { ContainerAdm } from './styled'

import { useHistory } from 'react-router-dom'

import Cookies from 'js-cookie'


function lerAdmLogado (navigation) {
    let logado = Cookies.get('logado-adm')
    if (!logado) {
        navigation.push('login-adm')
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function InicioAdm() {
    const navigation = useHistory();

    let admLogado = lerAdmLogado(navigation) || {};

    console.log(admLogado)

    const AdmProduto = async () => {
        navigation.push('/administrar-produtos')
    }

    const AdmPedido = async () => {
        navigation.push('/administrar-pedidos')
    }

    const Inicio = async () => {
        navigation.push('/')
    }

    return (
    <ContainerAdm>

        <div className="cabecalho-adm">
            <div className="logo-img-adm"><img src="../../../assets/images/logo-img-adm.svg" alt="" /></div>
            <div className="box-cabecalho">
                <div className="logo-adm">
                    <div className="logo1-adm">Sweet</div>
                    <div className="logo2-adm">Cherry</div>
                </div>

                <div className="btn-logout"><button onClick={Inicio}>Sair</button></div>
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