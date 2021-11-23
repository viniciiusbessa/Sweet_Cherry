import { ContainerAdmPedidos } from './styled'

import TableRequests from './tableRequests/index'

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

export default function AdministrarPedidos() {
    const navigation = useHistory();


    let admLogado = lerAdmLogado(navigation) || {};

    console.log(admLogado)

    const InicioAdm = async () => {
        navigation.push('/inicio-adm')
    }

    return (
    <ContainerAdmPedidos>

        <div className="box-titulo">
            <div className="inicio-adm">
                <button onClick={InicioAdm}><img src="../../../assets/images/casinha-inicio-adm.png" alt="" /> Início  </button>
            </div>                          
        </div>
        <div className="titulo-adm2">Administração / Sweet Cherry</div>

        <div className="box-conteudo-adm2">
            <div className="btn-add-adm2"><button>Administração Pedidos</button></div>
            <div className="barra-pesquisa-adm2">
                <input placeholder="pesquisa" />
                <div title="pesquisar" className="img-lupa"></div>
            </div>
        </div>

        <TableRequests />
        
        
        
    </ContainerAdmPedidos>
    )
}