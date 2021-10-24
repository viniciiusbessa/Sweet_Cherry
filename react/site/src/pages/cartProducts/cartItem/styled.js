import styled from "styled-components";


const ContainerItem = styled.tr`
    border-radius: 50px;
    border-bottom: 2px solid #D1EAF5;

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
`

export{ContainerItem}