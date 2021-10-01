import styled from 'styled-components'

const ContainerCompra = styled.div`
    display: flex;
    flex-direction: column;

    .fundo-cabecalho {
        background-image: url(../../assets/images/fundo2.png);
        background-size: 100% 180px;

        height: 180px;
    }

    .container-conteudo{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        padding: 4em 11em;
    }

    .container-compra {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .compra1-box1{
        display: flex;
        flex-direction: column;
    }

    .imagemC-box1 img{
        width: 310px;
        height: auto;

        border-radius: 35px;
    }

    .descricaoC-box1 {
        display: flex;
        flex-direction: column;
    }

    .desc-titulo1{
        padding-bottom: 5px;
        font-size: 30px;
    }

    .desc-descricao1 {
        padding-bottom: 15px;
        font-size: 30px;

        width: 12em;
    }

    .desc-descricao2 {
        padding-bottom: 15px;
        font-size: 30px;

        width: 14em;
    }

    .box-estrelinhas {
        display: flex;
        flex-direction: row;

        margin: 3em 0em;
    }


    .compra1-box2 {
        display: flex;
        flex-direction: column;
    }

    .tituloC-box2{
        font-size: 34px;
        padding-bottom: 0.1em;

        width: 9em;
    }

    .preco-produto {
        color: #FF8AB5;
        font-size: 24px;
        padding-bottom: 10px;
    }

    .botoes-box1{
        display: flex;
        flex-direction: row;
        width: 30em;

        margin-bottom: 1em;
    }

    .qtd-prod-input {
        text-align: center;

        background-color: #D1EAF5;
        border: none;
        border-radius: 12px;

        width: 91px;
        height: 49px;

        font-family: Pacifico;
        font-size: 20px;
        
        margin-right: 2.7em;
        padding: 1em 0.5em 1em 0.5em;
    }

    .qtd-prod-input:hover {
        cursor: text;
    }


    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }


    .Add-carrinho-bt {
        background-color: #D1EAF5;

        border: none;
        border-radius: 12px;

        font-family: Pacifico;
        font-size: 24px;

        padding: 0.3em 3.5em 0.3em 0.7em;
    }

    .Add-carrinho-bt img {
        width: 35px;
        height: auto;

        margin-bottom: -0.1em;
        margin-right: 1em;
    }

    .Add-carrinho-bt:hover {
        cursor: pointer;
        transition: 0.5s;

        background-color: #b5daeb;
    }

    .botoes-box2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-bottom: 1.5em;
    }

    .Add-favoritos-bt {
        background-color: #ffff;

        font-family: Pacifico;
        font-size: 20px;

        border: none;
        border-radius: 10px;
        
        margin-right: 1em;
    }

    .Add-favoritos-bt:hover {
        cursor: pointer;

        font-size: 21px;
    }

    .Add-favoritos-bt img {
        width: 30px;
        height: auto;

        margin-bottom: -0.3em;
    }

    .Confirm-compra1 {
        background-color: #D1EAF5;

        font-family: Pacifico;
        font-size: 24px;

        border-radius: 10px;
        border: none;

        padding: 0.2em 0.5em;
    }

    .Confirm-compra1:hover {
        background-color: #b5daeb;

        transition: 0.5s;
        cursor: pointer;
    }

    .calcular-bt {
        background-color: #D1EAF5;

        font-family: Pacifico;
        font-size: 24px;

        border-radius: 12px;
        border: none;

        padding: 0.2em 2em;
    }

    .calcular-bt:hover {
        background-color: #b5daeb;
        transition: 0.5s;
        cursor: pointer;
    }

    .calcular-titulo{
        font-size: 20px;
    }

    .calcular-input {
        width: 180px;
        height: 35px;

        border-radius: 12px;
        border: 1px solid #D1EAF5;

        font-family: Pacifico;
        font-size: 18px;

        margin-right: 2em;
        padding: 1em 0.5em;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        cursor: text;
    }

    .calcular-input:focus {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .estrelinhas-compra1{
        margin-bottom: 25px;
    }

    .cartoes{
        display: flex;
        flex-direction: row;
    }

    .imagens-logo {
        display: flex;
        flex-direction: column;

        border-radius: 17px;
        border: 5px solid #D1EAF5;
        
        padding: 1em 1em 0.5em 1em;
    }

    .compra1-box3 {
        display: flex;
        flex-direction: row;
    }

    .tres-primeiros {
        display: flex;
        flex-direction: row;
    }

    .cartao1 img {
        width: 10em;
        height: auto;
    }

    .cartao2 {
        padding: 0em 5em;
    }

    .cartao2 img {
        width: 5em;
        height: auto;
    }

    .cartao3 img {
        width: 7em;
        height: auto;
    }

    .dois-primeiros {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .cartao4 img {
        width: 11em;
        height: auto;
    }

    .cartao5 img {
        width: 5em;
        height: auto;
    }
`

export { ContainerCompra }