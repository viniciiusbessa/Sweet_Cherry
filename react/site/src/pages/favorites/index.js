import Header from "../../components/commum/header";
import CardProduct from "../../components/commum/cardProduct";
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

                <div class="box-doces1">
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                </div>

                <div class="box-doces2">
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                </div>
            </div>

            <Footer/>
        </ContainerFavoritos>
    )
}