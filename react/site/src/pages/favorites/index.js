import Header from "../../components/commum/header";
import BoxProduto from '../../components/product/cardProduct/index'
import Footer from "../../components/commum/footer";
import { ContainerFavoritos } from "./styled";

import { useState } from "react";


export default function Favorites() {

    const [produtos, setProdutos] = useState ([]);

    return (
        <ContainerFavoritos>
            <div className="cabecalho">
                <Header/>
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