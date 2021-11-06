import styled from 'styled-components'

const ContainerVerPedido = styled.div`
    display: flex;
    flex-direction: column;

    cursor: pointer;
    user-select: none;

        .fundo-ver-pedido {
            background-image: url(../../assets/images/fundo2.png);
            background-size: 100% 180px;

            height: 180px;
        }

        .conteudo-9 {
            display: flex;
            flex-direction: column; 
            padding: 4em 4em 0em 3em;
        }

        .box-item-9 {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .btn-voltar-perfil {
            font-family: Pacifico;
            font-size: 24px;
            color: #140018;

            background-color: #D1EAF5;

            border: none;
            border-radius: 12px;

            padding: 0.3em 1em;
        }

        .btn-voltar-perfil:hover {
            background-color: #b5daeb;
            cursor: pointer;
            transition: 0.5s;
        }
        
        .item-9{
            font-size: 35px;
            text-decoration: underline 6px solid #F6AAC6;
        }

        .compra-9{
            margin: 0.5em 0em 1em 2em;
            font-size: 35px;
        }

        .pedidos-9{
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;

            margin-bottom: 5em;
        }
`

export { ContainerVerPedido }