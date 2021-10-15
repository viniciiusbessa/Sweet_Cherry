import Header from "../../components/commum/header";
import BoxProduto from '../../components/product/cardProduct/index'
import Footer from "../../components/commum/footer";
import { ContainerFavoritos } from "./styled";


export default function Favorites() {
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
                    <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcake.jpg"/>
                    <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcakemorango.jpg"/>
                    <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcake.jpg"/>
                    <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcakemorango.jpg"/>
                    <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcakemorango.jpg"/>
                    <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcakemorango.jpg"/>
                    <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcakemorango.jpg"/>
                </div>
            </div>

            <Footer/>
        </ContainerFavoritos>
    )
}