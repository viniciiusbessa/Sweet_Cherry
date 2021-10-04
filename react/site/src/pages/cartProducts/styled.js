import styled from "styled-components";

const CartProduct = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #F6AAC6;

    .fundo-cabecalho {
        background-image: url(/assets/images/cabecalhoBranco.png);
        background-size: 100% 200px;

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
    }

    .nome-produto {
        margin-left: 1em;
    }

    .lixeira-carrinho  img {
        width: 40px;
        margin-right: 2em;
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
`
export {CartProduct}