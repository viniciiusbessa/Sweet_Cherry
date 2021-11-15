import styled from "styled-components"

const ContainerBoxProduto = styled.div`

    background-color: #D1EAF5;
    width: 18em;
    height: 28em;
    border-radius: 20px;
    cursor: pointer;
    margin: 2em;
    display: flex;
    justify-content: center;

    .imagem-doce img{
        margin: 1em;
        width: 16em;
        height: 12em;
        border-radius: 10px;

        cursor: pointer;
        user-select: none;
    }
    
    .nm-doce {
        font-size: 1.3em;
        
        text-align: center;
        margin: 0em .5em 0em .5em
    }

    .produto {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        cursor: pointer;
        user-select: none;
    }
    
    .icones {
        display: flex;
        flex-direction: row;
        margin-top: 1.5em
    }
    
    .icone-carrinho img{
        width: 35px;
        height: auto;
    
        margin-right: 10px;

        cursor: pointer;
    }

    .icone-coracao img{
        width: 30px;
        height: auto;

        cursor: pointer;
    }
    
    .preco {
        font-size: 20px;
        text-align: center;
        margin: 1em;
    }

    .button{
        display: flex;
        justify-content: center;

        cursor: pointer;
        user-select: none;
    }
    
    button {
        background-color: #2F1747;
        color: #ffffff;
        border: 0px;
        border-radius: 50px;
        width:  100px;
        height: 50px;

        cursor: pointer;
        user-select: none;

        font-family: pacifico;
        margin-top: 1.5em;
    }
    
    button:hover {
        background-color: #52277D;
        transition: all 0.5s ease-in;
    }

    @media(max-width: 1040px){
         
        background-color: #D1EAF5;
        width: 15em;
        height: 25em;
        border-radius: 20px;
        cursor: pointer;
        margin: 2em;

        display: flex;
        justify-content: center;

        .imagem-doce img{
          width: 135px;
          height: 135px;
        }

        .imagem-doce{
            margin-left: 15px;
        }

        .nm-doce{
            font-size: 20px;
        }
    }

    @media(max-width: 375px) {
        width: 10.5em;
        height: 17em;
        
        .produto {
            justify-content: space-around;
            width: 12em;
        }

        .imagem-doce img{
            width: 9.5em;
            height: 7em;
            margin: .4em;
        }
        .nm-doce {
            font-size: .9em;
        }
        .preco {
            font-size: .9em;
            text-align: center;
            margin: .5em 0em .7em .5em;
        }
        .icones {
            display: flex;
            flex-direction: row;
            margin: .5em;
        }
        .icone-carrinho img{
            width: 25px;
            margin-right: 7px;
        }
        .icone-coracao img{
            width: 20px;
        }
        button {
            width:  60px;
            height: 30px;
            font-size: 10px;
        }
    }
`

export {ContainerBoxProduto}