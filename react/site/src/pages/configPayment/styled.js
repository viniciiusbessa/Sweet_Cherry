import styled from "styled-components";

const ContainerPagamento = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #F6AAC6;

    .conteudo {
        display: flex;
        flex-direction: column;
        margin: 4em 0em;
    }

    .nome-conteudo {
        font-size: 2.6em;
        
        margin-left: 2em;
    }

    .conteiner-geral {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        margin-top: 2.5em;

        font-size: 1.5em;

        cursor: pointer;
        user-select: none;
    }

    .nm-input {
        font-family: Patua One;

        margin-top: 1em;
    }

    .nm-box {
        font-size: 1.4em;
    }

    .dados {
        width: 21em;
        height: auto;
        
        border-radius: 7px;
        box-shadow: 0px 4px 4px 0px #00000040;

        padding: 1em 2em 2em 2em;

        background: #FFFFFF;
    }


    .dados input {
        border: 3px solid #D1EAF5;
        border-radius: 4px;
        box-shadow: 0px 4px 4px 0px #00000040;

        width: 30em;
        height: 2.5em;
    }

    .entrega {
        width: 21em;
        height: auto;
        border-radius: 7px;
        box-shadow: 0px 4px 4px 0px #00000040;
        padding: 1em 2em 2em 2em;
        margin-top: 3em;

        background: #FFFFFF;
    }

    .entrega input {
        border: 3px solid #D1EAF5;
        border-radius: 4px;
        box-shadow: 0px 4px 4px 0px #00000040;

        width: 30em;
        height: 2.5em;
    }

    .fr-entrega select {
        margin-top: -0.5em;
        margin-left: 15.2em;

        border: 3px solid #D1EAF5;
        border-radius: 4px;
        box-shadow: 0px 4px 4px 0px #00000040;

        width: 40%;
        height: 1.5em;

    }

    .fr-entrega {
        display: flex;
        flex-direction: row;
    }

    .box-pg {
        width: 21em;
        height: auto;
        border-radius: 7px;
        box-shadow: 0px 4px 4px 0px #00000040;

        padding: 1em 2em 2em 2em;

        background: #FFFFFF;
    }

    .box-pg input {
        border: 3px solid #D1EAF5;
        border-radius: 4px;
        box-shadow: 0px 4px 4px 0px #00000040;

        width: 30em;
        height: 2.5em;
    }

    .box-pg select {
        border: 3px solid #D1EAF5;
        border-radius: 4px;
        box-shadow: 0px 4px 4px 0px #00000040;
        font-family: Patua One;
        width: 100%;
        height: 3em;
    }

    .botoes-pgmt {
        display: flex;
        justify-content: space-between;
    }
    
    .vlt-carrinho {
        border-radius: 20px;

        background-color: #FFFFFF;
        font-family: Pacifico;
        font-size: 0.9em;
        margin-top: 2em;
        color: #140018;

        border-style: none;

        width: 11em;
        height: 2.8em;
    }

    .vlt-carrinho:hover {
        background-color: #FFFFFF;
        cursor: pointer;
        border: 2px solid #D1EAF5;
    }

    .final-cmpra {
        border-radius: 20px;

        background-color: #D1EAF5;
        font-family: Pacifico;
        font-size: 0.9em;
        margin-top: 2em;
        color: #140018;

        border-style: none;

        width: 11em;
        height: 2.8em;
    }

    .final-cmpra:hover {
        background-color: #b5daeb;
        cursor: pointer;
        transition: 0.5s;
    }

    input {
        cursor: text;
    }

    select:focus {
        border: 4px solid #D1EAF5;
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    .box-cartoes {
        display: flex;
        flex-direction: column;

        margin: 2em 0em 0em 7em;
    }

    .box-icones {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;

        border: 3px solid #ffff;
        border-radius: 30px;

        width: 13em;
        height: 7.5em;

        margin-top: 10px;
        padding: 1em 0.5em 0em 0.5em;
    }

    .icons1 {
        margin-bottom: 1em;
    }

    .icon-pagseguro, .icon-mastercard {
        margin-right: 2em;
    }

    hr {
        background-color: #D1EAF5;

        padding: 0.4px 49.9%;
    }

    @media(max-width: 430px) {
        .conteudo {
            display: flex;
            flex-direction: column;
            margin: 2em 0em;
        }
        .nome-conteudo {
            font-size: 1em;
            margin-left: 1em;
        }
        .conteiner-geral {
            margin-top: 1em;
            font-size: 1em;
        }
        .nm-input {
            margin-top: .5em;
        }

        .nm-box {
            font-size: 1em;
            text-decoration: underline 2px #B5DAEB;
        }
        .dados {
            width: 15em;
            border-radius: 5px;
            box-shadow: 0px 0px 0px 0px #00000040;
            padding: .5em 1em 1em 1em;
            margin-left: 2em;
            background: transparent;
        }
        .dados input {
            border: 2px solid #D1EAF5;
            border-radius: 3px;
            box-shadow: 0px 3px 3px 0px #00000040;
            width: 15em;
            height: 2em;
        }
        .entrega {
            width: 15em;
            border-radius: 5px;
            box-shadow: 0px 0px 0px 0px #00000040;
            padding: .5em 1em 1em 1em;
            margin: 15em 0em 0em 2em;
            background: transparent;
        }

        .entrega input {
            border: 2px solid #D1EAF5;
            border-radius: 3px;
            box-shadow: 0px 3px 3px 0px #00000040;
            width: 15em;
            height: 2em;
        }
        .fr-entrega select {
            margin-top: -0.5em;
            margin-left: 15.2em;
            border: 2px solid #D1EAF5;
            border-radius: 3px;
            box-shadow: 0px 3px 3px 0px #00000040;

            width: 20%;
            height: 1em;
        }

        .container-pagamento {
            position: relative;
        }

        .box-pg {
            width: 15em;
            border-radius: 5px;
            box-shadow: 0px 0px 0px 0px #00000040;
            padding: .5em 1em 1em 1em;
            background: transparent;
            position: absolute;
            top: 32em;
            left: .7em;
        }

        .box-pg input {
            border: 2px solid #D1EAF5;
            border-radius: 3px;
            box-shadow: 0px 3px 3px 0px #00000040;
            width: 15em;
            height: 2em;
        }
        .box-pg select {
            border: 2px solid #D1EAF5;
            border-radius: 3px;
            box-shadow: 0px 3px 3px 0px #00000040;
            width: 15em;
            height: 2em;
        }

        .botoes-pgmt {
            display: flex;
            justify-content: space-between;
            width: 12em;
            position: absolute;
            top: 53em;
            left: 18em;
            display: flex;
            flex-direction: column-reverse;
        }
    
        .vlt-carrinho {
            border-radius: 15px;
            font-family: Pacifico;
            font-size: 0.7em;
            width: 7em;
            height: 2.5em;
        }
        .vlt-carrinho:hover {
            border: 1px solid #D1EAF5;
        }

        .final-cmpra {
            border-radius: 15px;
            font-size: 0.7em;
            color: #140018;
            width: 10em;
            height: 2.5em;
        }
        .box-cartoes {
            margin: 22em 1em 0em 0em;
        }
        .box-icones {
            border: 2px solid #ffff;
            border-radius: 25px;
            width: 10em;
            height: 7em;
            margin-top: 8px;
            padding: .5em 0.3em 0em 0.3em;
        }
        .icons1 {
            margin-bottom: .5em;
        }
        .icon-pagseguro, .icon-mastercard {
            margin-right: 1em;
        }
        .icons1 img, .icons2 img {
            width: 3em;
        }
    }
`

export { ContainerPagamento }