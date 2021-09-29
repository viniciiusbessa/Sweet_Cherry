import styled from 'styled-components'

const ContainerCompra = styled.div`
    display: flex;
    flex-direction: column;

    .fundo-cabecalho {
        background-image: url(../../assets/images/fundo2.png);
        background-size: 100% 180px;

        height: 180px;
    }

    .container-compra{
        display: flex;
        flex-direction: row;
        margin-right: 0px;
        margin-left: 250px;
        margin-top: 50px;
    }

    .compra1-box1{
        display: flex;
        flex-direction: column;
        margin-left: 50px;
    }

    .img-compra img {
        width: 300px;
    }

    .imagemC-box1 img{
        width: 300px;
        border-radius: 35px;
    }

    .desc-titulo1{
        padding-bottom: 5px;
        font-size: 16px;
    }

    .desc-descricao1 {
        padding-bottom: 15px;
    }


    .compra1-box2{
        display: flex;
        flex-direction: column;
    }

    .tituloC-box2{
        font-size: 24px;
        padding-bottom: 5px;
    }

    .preco-produto {
        font-family: Oranienbaum;
        color: #FF8AB5;
        font-size: 24px;
        padding-bottom: 10px;
    }

    .botoes-box1{
        margin-bottom: 15px;
    }

    .qtd-prod-input{
        background-color: #D1EAF5;
        border: none;
        border-radius: 10px;
        height: 30px;
        width: 50px;
        font-family: Pacifico;
        font-size: 20px;
        padding-left: 30px;    
        margin-right: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
    }


    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }


    .Add-carrinho-bt{
        background-color: #D1EAF5;
        border: none;
        border-radius: 10px;
        font-family: Pacifico;
        font-size: 18px;
        padding-right: 35px;
        padding-bottom: 5px;
        padding-top: 5px;
        padding-left: 25px;
    }

    .Add-carrinho-bt img {
        width: 29px;
    }

    .Add-carrinho-bt button{
        justify-content: center;
        background-color: #B8E8FD;
        
        
    }

    .botoes-box2{
        margin-bottom: 15px;
    }

    .Add-favoritos-bt{
        background-color: #ffff;
        font-family: Pacifico;
        border: none;
        border-radius: 10px;
        font-size: 14px;
        margin-right: 25px;
    }

    .Confirm-compra1{
        background-color: #D1EAF5;
        font-family: Pacifico;
        font-size: 18px;
        border-radius: 10px;
        border: none;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .calcular-bt {
        background-color: #D1EAF5;
        font-family: Pacifico;
        font-size: 18px;
        border-radius: 10px;
        border: none;
        padding-right: 25px;
        padding-left: 25px;
    }

    .calcular-titulo{
        margin-bottom: 10px;
    }

    .calcular-input {
        border-color: #D1EAF5;
        width: 180px;
        height: 35px;
        border-radius: 10px;
        font-family: Pacifico;
        margin-right: 25px;
    }

    .estrelinhas-compra1{
        margin-bottom: 25px;
    }

    .cartoes{
        margin-left: 300px;
    }
`

export { ContainerCompra }