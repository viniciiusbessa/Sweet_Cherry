import styled from "styled-components";

const TableCart = styled.td`
    display: flex;
    flex-direction: row;
    
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
`

export {TableCart}