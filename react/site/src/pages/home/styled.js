
import styled from "styled-components";

const ContainerInicial = styled.div`
  
    display: flex;
    flex-direction: column;

    background-image: url(../../assets/images/onda_esquerda.png);
    background-size: 42em 3000px;
    background-position: right;
    background-repeat: repeat-y;


    .F1_home{
        display: flex;
        flex-direction: row;

        justify-content: space-between;
        margin-bottom: 30vh;
        margin-top: 30vh;
    }

    .button1{
        display: flex;
        flex-direction: row-reverse;

        border-bottom-right-radius: 2em;
        border-top-right-radius: 2em;

        background-color: lightpink;

    }

    .button2{
        display: flex;
        flex-direction: row;

        border-bottom-left-radius: 2em;
        border-top-left-radius: 2em;
        
        background-color: lightblue;

    }

    .button1, .button2{
        cursor: pointer;

        align-items: center;

        border: none;
        
        width: 15em;
        height: 5em;

        animation-duration: 2s;
    }

`



export {ContainerInicial}