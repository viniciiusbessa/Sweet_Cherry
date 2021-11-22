import { ContainerAdmPedidos } from './styled'

import TableRequests from './tableRequests/index'

import { useHistory } from 'react-router-dom'

import Cookies from 'js-cookie'
import { useEffect, useRef, useState } from 'react'
import Api from '../../../service/api'
const api = new Api();


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

    const [tabela, setTabela] = useState([]);
    const loading = useRef(null);


    let admLogado = lerAdmLogado(navigation) || {};

    console.log(admLogado)

    const InicioAdm = async () => {
        navigation.push('/inicio-adm')
    }

    async function listarPedido() {
        loading.current.continuousStart();

        let v1 = await api.listarPedidos('cliente');
        setTabela(v1);

        loading.current.complete()
    }

    useEffect(() => {
        listarPedido();
    }, [])

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

        {tabela.map(item =>

        <TableRequests 

            key={item.id}
            info={item} />

        )}
        
        
    </ContainerAdmPedidos>
    )
}