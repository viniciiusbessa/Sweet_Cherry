import styled from "styled-components";

const CartProduct = styled.div`
    display: flex;
    flex-direction: column;
    
    .box-carrinho {
        margin: 2em 15em;
    }

    .titulo-carrinho {
        font-size: 30px;
        color: #140018;

    }

    table {
        width: 70em;
        margin: 3em 2em 0em 5em;

        background-color: white;
        border-collapse:collapse;
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

        font-size: 18px;
        border: 0px;
        border-radius: 20px;
        background-color: #ffff;
        font-family: Pacifico;
        cursor: pointer;
    }

    .botoes button:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    } 

    .total {
        margin-left: 86em;
    }

    .continuar button {
        width: 12em;
        height: 4em;

        font-size: 18px;
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

        font-size: 18px;
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
        width: 79.5em;
        margin: 3em 0em 0em 20em;
    }

    .box-cartoes {
        display: flex;
        flex-direction: column;

        margin: 3em 0em 2em 20em;
    }




    .box-icones {
        border: 3px solid #ffff;
        border-radius: 20px;
        width: 15em;
        height: 6em;

        margin-top: 10px;
        padding: 1em;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .icons1 {
        margin-bottom: 1em;
    }

    .icon-pagseguro, .icon-mastercard {
        margin-right: 2em;
    }


    footer {
        background-color: #FF8AB5;
        color: white;

        display: flex;
        flex-direction: row;

        justify-content: center;
        height: 120px;

        text-align: center;
        font-size: 18px;
    }


    .rodape {
        display: flex;
        flex-direction: row;

        margin-top: 30px;
    }

    .sociais {
        display: flex;
        flex-direction: row;

        cursor: pointer;
    }

    .icon img {
        padding-left: 12px;
        margin-top: 10px;
    }

    .linha {
        margin-top: 15px;
    }
`
export {CartProduct}