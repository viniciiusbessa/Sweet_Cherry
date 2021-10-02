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
        width: auto;
        height: 12em;
    }
    
    .sobre_Produto {
        display: flex;
        flex-direction: row;
    
    }
    
    .nm-doce {
        font-size: 25px;
        
        text-align: center;
        margin-left: 1em;
        margin-right: 1em;
    }
    
    .icones {
        display: flex;
        flex-direction: row;
    
        
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
        margin: 1em;
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
        
    }
    
    button:hover {
        background-color: #52277D;
        transition: all 0.5s ease-in;
    }
`

export {ContainerBoxProduto}