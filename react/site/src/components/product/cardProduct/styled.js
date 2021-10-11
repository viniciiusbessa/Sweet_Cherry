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
        max-width: 15em;
        height: 11em;
        border-radius: 10px;
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
    }
    
    button {
        background-color: #2F1747;
        color: #ffffff;
        border: 0px;
        border-radius: 50px;
        width:  100px;
        height: 50px;
        cursor: pointer;
        font-family: pacifico;
        margin-top: 1.5em;
    }
    
    button:hover {
        background-color: #52277D;
        transition: all 0.5s ease-in;
    }
`

export {ContainerBoxProduto}