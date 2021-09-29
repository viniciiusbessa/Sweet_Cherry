import styled from "styled-components"

const ContainerBoxProduto = styled.div`

    background-color: #D1EAF5;
    width: 13em;
    height: 18em;

    border-radius: 20px;

 
 .img-doce img{
    margin: 1em;
 
    width: 11em;
    height: 8em;
 }
 
 .sobre {
    display: flex;
    flex-direction: column;

    margin-left: 20px;
 }
 
 .nm-doce {
     font-size: 18px;
 }
 
 .icones {
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
     margin-right: 10px;
     margin-left: 3em;
 }
 
 .icone-carrinho img{
     width: 30px;
     height: auto;

 }

 .icone-coracao img{
    width: 40px;
    height: auto;
 }
 
 .preco {
    font-size: 20px;
    text-align: center;

 }
 
`

export {ContainerBoxProduto}