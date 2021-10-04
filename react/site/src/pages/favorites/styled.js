import styled from "styled-components";


const ContainerFavoritos = styled.div `

    display: flex;
    flex-direction: column;

    .cabecalho {
        background-image: url(/assets/images/fundo2.png);
        background-size: 100% 180px;

        height: 180px;
    }
    

    .box-favoritos{
        display: flex;
        flex-direction: column;

    }

    .box-texto {
        margin-bottom: 3em;
        margin-left: 2em;
    }

    .titulo-fav {
        font-size: 30px;
        color: #140018;
    }

    .ds {
    font-size: 18px;
    color: #C4C4C4;

    }

    .box-doces {
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap;

   
    justify-content: space-around;
    align-items: center;


    }
`

export {ContainerFavoritos}