import styled from "styled-components";


const ContainerItem = styled.tr`
    border-radius: 50px;
    border-bottom: 2px solid #D1EAF5;

    cursor: pointer;
    user-select: none;

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

    td {
        margin: 1em 0em 1em 0em;
        padding: 1em 0em 1em 1.5em;
    }

    .lixeira-carrinho  img {
        width: 40px;
        margin-right: 2em;
    }

    .contador {
        width: 1em;
        height: auto;
    }

    .acao img {
        background-color: #fff;
        cursor: pointer;
    }

    .acao > button {
        visibility: hidden;
    }

    &:hover {
        .acao > button {
            visibility: visible;
        }

        button {
            background-color: Transparent;
            border: 0px;
        }
    }
`

export { ContainerItem }