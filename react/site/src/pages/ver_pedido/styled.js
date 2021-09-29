import styled from 'styled-components'

const ContainerVerPedido = styled.div`
    display: flex;
    flex-direction: column;

        .fundo-ver-pedido {
            background-image: url(../../assets/images/fundo.png);
            background-size: 100% 180px;

            height: 180px;
        }

        .conteudo-9{
            display: flex;
            flex-direction: column; 
            padding: 4em 4em 0em 3em;
        }

        .item-9{
            font-size: 35px;
        }

        .compra-9{
            margin: 0.5em 0em 1em 2em;
            font-size: 35px;
        }

        .imagem_do_bolo-9 img{
            width:150px;
            height: 150px;
        }

        .imagem_carrinho-9{
            margin: 1em 0em 0em 2.5em;
        }

        .imagem_carrinho-9 img{
            width:30px;
            height: 30px;
        }

        .imagem_coracao-9{
            margin: 1em 0em 0em 0.5em;

        }
        .imagem_coracao-9 img{
            width:30px;
            height: 30px;
        }

        .pedidos-9{
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;

            margin-bottom: 5em;
        }

        .preco-9{
            text-align: center;
            margin-bottom: 0.5em;
        }
        .ver_mais-9 button{
            background-color:#2F1747;
            color: white;
            border: none;
            border-radius: 20px;
            font-family: Pacifico;
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
            margin: 1em 1.5em 0em 1.5em;
            padding: 0.8em;
            border-radius: 7px;
        }

        .informacoes_do_doce-9{
            display: flex;
            flex-direction: row;
        }

        .bolo_qtd-9{
            display: flex;
            flex-direction: column;
        }
`

export { ContainerVerPedido }