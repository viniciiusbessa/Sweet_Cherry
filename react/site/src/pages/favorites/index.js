import Header from "../../components/commum/header";
import BoxProduto from '../../components/product/cardProduct/index'
import Footer from "../../components/commum/footer";
import { ContainerFavoritos } from "./styled";

import { useState } from "react";

import Cookies from 'js-cookie'

import { useHistory } from "react-router";

function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function Favorites() {
    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [usu] = useState(usuarioLogado.nm_cliente);

    const [produtos] = useState ([]);

    return (
        <ContainerFavoritos>
            <div className="cabecalho">
                <Header value={usu} />
            </div>
            <div class="box-favoritos">
                <div class="box-texto">
                    <div class="titulo-fav">Meus favoritos</div>
                    <div class="ds">Os doces que você curtiu estão aqui :)</div>
                </div>

                <div class="box-doces">
                    {produtos.map(item => 
                        <BoxProduto 
                            key={item.id}
                            info={item} />
                    )}  
                   
                   
                </div>
            </div>

            <Footer/>
        </ContainerFavoritos>
    )
}