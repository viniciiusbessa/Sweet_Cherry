import styled from "styled-components";

const CartProduct = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #F6AAC6;


    .fundo-cabecalho {
        background-image: url(/assets/images/cabecalhoBranco.png);
        background-size: 100% 200px;
        background-repeat: no-repeat;
        height: 200px;
    }
    
    .box-carrinho {
        margin: 2em 8em;
    }

    .titulo-carrinho {
        font-size: 30px;
        color: #140018;
    }

    table {
        width: 100%;
        margin: 3em 0em 0em 0em;

        background-color: white;
        border-collapse: collapse;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        text-align: left;

        font-size: 18px;

        cursor: pointer;
        user-select: none;
    }

    th {
        padding-left: 20px;
        font-weight: 500;
        text-align: left;

        background-color: #D1EAF5;
    }

    .cabecalho-tabela {
        height: 70px;
    }

    td {
        margin: 1em 0em 1em 0em;
        padding: 1em 0em 1em 1.5em;
    }

    tr {
        border-radius: 50px;
        border-bottom: 2px solid #D1EAF5;
    }

    .doce-carrinho {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .doce-carrinho img {
        width: 8em;

        cursor: pointer;
        user-select: none;
    }

    .nome-produto {
        margin-left: 1em;
    }

    .lixeira-carrinho  img {
        width: 40px;
        margin-right: 2em;

        cursor: pointer;
        user-select: none;
    }

    .total button{
        width: 12em;
        height: 4em;

        font-size: 22px;
        font-family: Pacifico;

        border: 0px;
        border-radius: 20px;

        background-color: #ffff;
        
        cursor: pointer;
    }

    .botoes button:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    } 

    .total {
        align-self: flex-end;

        margin-right: 8em;

        cursor: pointer;
        user-select: none;
    }

    .continuar button {
        width: 12em;
        height: 4em;

        font-size: 20px;
        border: 0px;
        border-radius: 20px;
        background-color: #ffff;
        font-family: Pacifico;
        border: 2px solid #D1EAF5;
        cursor: pointer;
    }

    .confirmar button {
        width: 12em;
        height: 4em;

        font-size: 20px;
        border: 0px;
        border-radius: 20px;
        background-color: #D1EAF5;
        font-family: Pacifico;
        cursor: pointer;
    }

    .botoes {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin: 3em 8em 0em 8em;

        cursor: pointer;
        user-select: none;
    }



    .box-cartoes {
        display: flex;
        flex-direction: column;

        margin: 3em 0em 2em 5em;
    }

    .titulo-box {
        font-size: 25px;
    }

    .box-icones {
        display: flex;
        flex-direction: column;

        border: 3px solid #ffff;
        border-radius: 20px;

        width: 18em;
        height: 9em;

        margin-top: 10px;
        padding: 1em;

        cursor: pointer;
        user-select: none;
    }

    .icons1 {
        margin-bottom: 1em;
    }


    .icon-pagseguro {
        width: 8em;
        height: auto;
    }

    .icon-visa {
        width: 3.5em;
        height: auto;

        margin-left: 3em;
    }

    .icon-mastercard {
        width: 5em;
        height: auto;

        margin-left: 2em;
    }

    .icon-elo {
        width: 5em;
        height: auto;

        margin-left: 2em;
    }

    @media(max-width: 1040px){
        
        .box-carrinho{
            margin: 0px;
            margin-top: 15px;
        }

        .titulo-carrinho{
            margin-left: 15px;
        }

        .tabela-produtos{
            margin-bottom: 50px;
        }

        .botoes{
            margin: 0px;
            margin-top: 25px;   
        }

        .total{
            margin-right: 50px;
        }

        .botao-total button{
            
        }

        .continuar button{
            width: 150px;
            height: 70px;
            font-size: 15px;
            margin-left: 15px;
        }

        .confirmar button{
            width: 150px;
            height: 70px;
            font-size: 15px;
            margin-right: 15px;
        }

        .box-cartoes{
            margin-left: 15px;
            margin-right: 0px;
        }

        .box-icones{
            margin-left: 25px;
        }

        thead{
            font-size: 15px;
        }

        tbody{
            font-size: 15px;
        }

        tbody img{
            width: 25px;
        }

        th{
            
        }
    }

    @media(max-width: 430px) {
        .fundo-cabecalho {
            background-size: 100% 50%;
            height: 180px;
        }
        .box-carrinho {
            margin: 0em 1em;
        }

        .titulo-carrinho {
            font-size: 20px;
        }

        table {
            width: 100%;
            margin: .5em 0em 0em 0em;
            box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
            font-size: 12px;
        }
        th {
            padding-left: 15px;
        }
        .cabecalho-tabela {
            height: 45px;
        }
        td {
            margin: .5em 0em .5em 0em;
            padding: .5em 1em;
        }
        .nome-produto {
            margin-left: .5em;
        }

        .lixeira-carrinho  img {
            width: 30px;
            margin-right: 1em;
        }
        .total button{
            width: 8em;
            height: 3em;
            font-size: 16px;
            border-radius: 15px;
        }
        .total {
            margin-right: 1em;
        }
        .continuar button {
            width: 10em;
            height: 3em;
            font-size: 16px;
            border-radius: 15px;
        }
        .confirmar button {
            width: 9em;
            height: 3em;
            font-size: 16px;
            border-radius: 15px;
            background-color: #D1EAF5;
        }
        .botoes {
            margin: 1em 0em 0em 0em;
        }
        .continuar button {
            margin-right: 5em;
        }
        .box-cartoes {
            margin: 2em 0em 2em 1em;
        }
        .titulo-box {
            font-size: 18px;
        }
        .box-icones {
            border: 2px solid #ffff;
            border-radius: 15px;
            width: 12em;
            height: 8em;
            margin-top: 5px;
            padding: .5em;
        }
        .icons1 {
            margin-bottom: .5em;
        }
        .icon-pagseguro{
            width: 5.5em;
        }
        .icon-visa {
            width: 4em;
            margin-left: 1em;
        }
        .icon-mastercard {
            width: 4em;
            margin-left: 1em;
        }
        .icon-elo {
            width: 4em;
            margin-left: 1em;
        }
    }
`
export {CartProduct}