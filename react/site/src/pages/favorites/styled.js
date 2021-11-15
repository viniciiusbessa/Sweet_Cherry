import styled from "styled-components";


const ContainerFavoritos = styled.div `

    display: flex;
    flex-direction: column;

    .cabecalho {
        background-image: url(/assets/images/fundo2.png);
        background-size: 100% 180px;
        background-repeat: no-repeat;
        height: 180px;
    }

    .box-favoritos{
        display: flex;
        flex-direction: column;
        margin: 2em 0em 0em 10em;
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

    .box-doces {
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap;
    max-width: 80%;

   
    justify-content: space-around;
    align-items: center;
    }

    .hoverProduto {
        transition: all ease-in-out .25s;
    }
     
    .hoverProduto:hover {
        transform: translateY(-2em);
    }

    @media(max-width: 430px) {
        .cabecalho {
            background-size: 100% 50%;
        }
        .box-favoritos{
            display: flex;
            flex-direction: column;
            margin: 0em 0em 0em 3em;
        }
        .box-texto {
            margin-bottom: .2em;
        }
        .titulo-fav {
            font-size: 23px;
        }
        .ds {
            font-size: 16px;
            color: #C4C4C4;
        }
    }
`

export {ContainerFavoritos}