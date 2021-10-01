import styled from "styled-components";


const ContainerFavoritos = styled.div `

    display: flex;
    flex-direction: column;

    //.cabecalho {
    //    background-image: url(require("../../../public/assets/images/background"));
    //}
    

    .box-favoritos{
        display: flex;
        flex-direction: column;

        margin: 5em 0em 0em 10em;
    }

    .box-texto {
        margin-bottom: 3em;
    }

    .titulo-fav {
        font-size: 30px;
        color: #140018;
    }

    .ds {
    font-size: 18px;
    color: #C4C4C4;

    }

    .box-doces1, .box-doces2 {
    display: flex;
    flex-direction: row; 

    width: 100em;
    justify-content: space-around;
    align-items: center;

    margin-bottom: 80px;
    }
`

export {ContainerFavoritos}