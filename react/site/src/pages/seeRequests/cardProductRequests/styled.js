import styled from "styled-components";

const ContainerBoxPedido = styled.div`
    display: flex;
    flex-direction: row;

        .imagem_do_bolo-9 img{
            width: 210px;
            height: auto;
        }

        .imagem_carrinho-9{
            margin: 1em 0em 0em 2.5em;
        }

        .imagem_carrinho-9 img{
            width: 40px;
            height: auto;

            cursor: pointer;
        }

        .imagem_coracao-9{
            margin: 1em 0em 0em 0.5em;

        }
        .imagem_coracao-9 img{
            width: 35px;
            height: auto;

            cursor: pointer;
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
            display: flex;
            flex-direction: column;

            background-color: #D1EAF5;

            margin: 1em 2.5em 2em 2.5em;
            padding: 0.8em;

            border-radius: 7px;
        }

        .informacoes_do_doce-9{
            display: flex;
            flex-direction: row;

            font-size: 1.5em;
        }

        .bolo_qtd-9{
            display: flex;
            flex-direction: column;
        }
`

export { ContainerBoxPedido }