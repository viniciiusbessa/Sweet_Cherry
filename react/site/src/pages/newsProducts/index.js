import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import BoxProduto from '../../components/product/cardProduct/index'

import LoadingBar from 'react-top-loading-bar';

import { ContainerNovidades } from './styled'
import { useState, useRef, useEffect } from 'react'

import Cookies from 'js-cookie'

import { useHistory } from "react-router";

import Api from '../../service/api'
const api = new Api();

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function Novidades() {
    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [usu] = useState(usuarioLogado.nm_cliente);

    const loading = useRef(null);

    const [novidades, setNovidades] = useState([]);

    async function listarCategoria() {
        loading.current.continuousStart();

        let l = await api.listarProdutosCategoria('Novidades');

        setNovidades(l);
       
        loading.current.complete()
    }

    useEffect(() => {
        listarCategoria();
     }, [])

    return (
    <ContainerNovidades>
        <Cabecalho value={usu} />
        
        <LoadingBar color="#A4BCFF" ref={loading}/>

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
                {novidades.map(item => 
                    <BoxProduto 
                        key={item.id}
                        info={item} />
                )}  
        </div>

        <Rodape />
    </ContainerNovidades>
    )
}