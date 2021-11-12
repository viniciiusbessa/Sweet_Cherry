import styled from "styled-components";

const ContainerBoxPedido = styled.div`
    display: flex;
    flex-direction: row;

    .imagem_do_bolo-9 img{
        margin: 1em;
        max-width: 15em;
        height: 11em;
        border-radius: 10px;

        cursor: pointer;
        user-select: none;
    }

    .preco-9 {
        text-align: center;
        margin-bottom: 0.5em;

        font-size: 1.3em;
    }

    .ver_mais-9 button{
        background-color:#2F1747;

        color: #fff;
        font-family: Pacifico;

        border: none;
        border-radius: 20px;
        
        padding: 0.5em 2em;
    }

    .ver_mais-9 button:hover {
        background: #472666;
        cursor: pointer;
        transition: 0.5s;
    }

    .ver_mais-9{
        text-align: center;
    }

    .pedido-item-9{
        width: 18em;
        height: 28em;
        border-radius: 20px;
        cursor: pointer;
        margin: 2em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #D1EAF5;
    }

    .informacoes_do_doce-9{
        display: flex;
        flex-direction: row;

        font-size: 1.5em;
    }

    .nome-doce {
        font-size: 1em;
        margin-left: 1em;
    }

`

export { ContainerBoxPedido }