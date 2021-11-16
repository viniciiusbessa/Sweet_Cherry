import styled from 'styled-components'

const ContainerCompra = styled.div`
    display: flex;
    flex-direction: column;

    .fundo-cabecalho {
        background-image: url(../../assets/images/fundo2.png);
        background-size: 100% 180px;
        background-repeat: no-repeat;
        height: 180px;
    }

    .container-conteudo{
        display: flex;
        flex-direction: column;
        padding: 4em 11em;
    }

    .container-compra {
        display: flex;
        flex-direction: row;
    }

    .compra1-box1{
        display: flex;
        flex-direction: column;
    }

    .imagemC-box1 img{
        width: 310px;
        height: auto;

        border-radius: 35px;
    }

    .descricaoC-box1 {
        display: flex;
        flex-direction: column;
    }

    .desc-titulo1{
        padding-bottom: 5px;
        font-size: 30px;
    }

    .desc-descricao1 {
        padding-bottom: 15px;
        font-size: 30px;

        width: 12em;
    }

    .desc-descricao2 {
        padding-bottom: 15px;
        font-size: 30px;

        width: 14em;
    }

    .box-estrelinhas {
        display: flex;
        flex-direction: row;

        margin: 3em 0em;
    }


    .compra1-box2 {
        display: flex;
        flex-direction: column;
    }

    .tituloC-box2{
        font-size: 34px;
        padding-bottom: 0.1em;

        width: 9em;
    }

    .preco-produto {
        color: #FF8AB5;
        font-size: 24px;
        padding-bottom: 10px;
    }

    .botoes-box1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 30em;

        margin-bottom: 1.5em;
    }


    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }


    .Add-carrinho-bt {
        background-color: #D1EAF5;

        border: none;
        border-radius: 12px;

        font-family: Pacifico;
        font-size: 24px;

        padding: 0.3em 0.7em 0.3em 0.7em;
    }

    .Add-carrinho-bt img {
        width: 35px;
        height: auto;

        margin-bottom: -0.1em;
        margin-right: 0.7em;
    }

    .Add-carrinho-bt:hover {
        cursor: pointer;
        transition: 0.5s;

        background-color: #b5daeb;

        align-self: flex-end;
    }

    .botoes-box2{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        margin-bottom: 1.5em;
    }

    .Add-favoritos-bt {
        background-color: #ffff;

        font-family: Pacifico;
        font-size: 20px;

        border: none;
        border-radius: 10px;
    }

    .Add-favoritos-bt:hover {
        cursor: pointer;

        font-size: 21px;
    }

    .Add-favoritos-bt img {
        width: 30px;
        height: auto;

        margin-bottom: -0.3em;
    }

    .Confirm-compra1 {
        background-color: #D1EAF5;

        font-family: Pacifico;
        font-size: 24px;

        border-radius: 10px;
        border: none;

        padding: 0.2em 0.7em;
    }

    .Confirm-compra1:hover {
        background-color: #b5daeb;

        transition: 0.5s;
        cursor: pointer;
    }

    .calcular-bt {
        background-color: #D1EAF5;

        font-family: Pacifico;
        font-size: 24px;

        border-radius: 12px;
        border: none;

        padding: 0.2em 2em;
    }

    .calcular-bt:hover {
        background-color: #b5daeb;
        transition: 0.5s;
        cursor: pointer;
    }

    .calcular-titulo{
        font-size: 20px;
    }

    .valor-input-fixo{
       display: flex;
       flex-direction: row;
       margin-top: 35px;
       justify-content: center
    }

    .frete-fixo{
        padding-right: 10px;
        font-size: 23px;
    }

    .calcular-input {
        width: 180px;
        height: 40px;

        border-radius: 12px;
        border: 3px solid #D1EAF5;

        font-family: Pacifico;
        font-size: 18px;

        margin-right: 2em;
        padding: 1em 0.5em;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    .calcular-input:focus {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        transition: 0.3s;
    }

    .estrelinhas-compra1{
        margin-bottom: 25px;
    }

    .cartoes{
        display: flex;
        flex-direction: row;
    }

    .imagens-logo {
        display: flex;
        flex-direction: column;

        border-radius: 17px;
        border: 5px solid #D1EAF5;
        
        padding: 1em 1em 0.5em 1em;
    }

    .compra1-box3 {
        display: flex;
        flex-direction: row;
    }

    .cartao1 img {
        width: 10em;
        height: auto;
    }

    .cartao2 {
        padding: 0em 5em;
    }

    .cartao2 img {
        width: 5em;
        height: auto;
    }

    .cartao3 img {
        width: 7em;
        height: auto;
    }

    .dois-primeiros {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .cartao4 img {
        width: 5em;
        height: auto;
    }

    .compra1-box3 {
        margin-left: 10em;
    }

    .titulo-slide {
        font-size: 23px;
        color: #c4c4c4;
        margin: 0em 0em .5em 1em;
    }

    @media(max-width: 430px) {
        .fundo-cabecalho {
            background-size: 100% 110px;
            height: 115px;
        }
        .container-conteudo{
            display: flex;
            flex-direction: column;
            padding: 4em 2em;
        }
        .imagemC-box1 img{
            width: 10em;
            border-radius: 15px;
        }
        .desc-titulo1{
            padding-bottom: 0px;
            font-size: 16px;
        }
        .desc-descricao1 {
            padding-bottom: 0px;
            font-size: 18px;
            width: 10em;
        }
        .box-estrelinhas {
            display: flex;
            flex-direction: row;

            margin: 1em 0em;
        }
        .tituloC-box2{
            font-size: 20px;
            padding-bottom: 0em;
        }

        .preco-produto {
            color: #FF8AB5;
            font-size: 18px;
            padding-bottom: 0px;
        }

        .botoes-box1{
            flex-direction: column;
            width: 10em;
            margin: .5em 0em .5em 0em;
        }
        .Add-carrinho-bt {
            border-radius: 10px;
            font-size: 14px;
            align-items: center;
            padding: 0.5em 0.8em;
        }

        .Add-carrinho-bt img {
            width: 20px; 
            margin-bottom: 0em;
            margin-right: 0.3em;
        }
        .botoes-box2{
            margin-bottom: .5em;
            justify-content: flex-start;
        }
        .Add-favoritos-bt {
            font-size: 14px;

            border: none;
            border-radius: 10px;
            margin-bottom: .5em;
        }
        .Add-favoritos-bt:hover {
            font-size: 18px;
        }

        .Add-favoritos-bt img {
            width: 20px;
            margin-bottom: 0em;
        }
        .Confirm-compra1 {
            font-size: 14px;
            padding: 0.5em 0.8em;
        }

        .valor-input-fixo{
            margin: 20px 0px 0px 20px;
        }

        .frete-fixo{
            padding-right: 5px;
            font-size: 14px;
        }
        .calcular-input {
            width: 5em;
            height: 1em;
            border-radius: 7px;
            border: 2px solid #D1EAF5;
            font-size: 14px;
            margin-right: 30em;
            padding: .7em 0.5em;
        }
        .imagens-logo {
            border-radius: 9px;
            border: 4px solid #D1EAF5;
            padding: .5em;
        }
        .cartao1 img, .cartao2 img, .cartao3 img, .cartao4 img  {
            width: 4em;
            height: auto;
        }
        .cartao2 {
            padding: 0em 2em;
        }

        .compra1-box3 {
            margin-left: 0em;
        }
        .cartoes{
            margin-top: 3em;
        }
    }
`

export { ContainerCompra }