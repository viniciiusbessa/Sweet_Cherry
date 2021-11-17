import Header from "../../components/commum/header";
import BoxProduto from '../../components/product/cardProduct/index'
import Footer from "../../components/commum/footer";
import { ContainerFavoritos } from "./styled";

import { useState, useEffect } from "react";

import { useHistory } from "react-router";

import Cookies from 'js-cookie';

import Api from "../../service/api";
const api = new Api();

function lerUsuarioLogado(navigation) {
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

    const [usu] = useState(usuarioLogado);

    const [favoritos, setFavoritos] = useState([]);

    async function mostrarFavoritos() {
        if (usu.id_cliente) {
            let v = await api.mostrarFavoritos(usu.id_cliente);
            console.log(v)
            setFavoritos(v);
        }
    }

    useEffect(() => {
        mostrarFavoritos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContainerFavoritos>
            <div className="cabecalho">
                <Header value={usu.nm_cliente} />
            </div>
            <div class="box-favoritos">
                <div class="box-texto">
                    <div class="titulo-fav">Meus favoritos</div>
                    <div class="ds">Os doces que você curtiu estão aqui :)</div>
                </div>

                <div class="box-doces">
                    {favoritos.map(item =>
                        <BoxProduto
                            key={item.id}
                            info={item} 
                            fav={mostrarFavoritos} />
                    )}
                </div>
            </div>

            <Footer />
        </ContainerFavoritos>
    )
}