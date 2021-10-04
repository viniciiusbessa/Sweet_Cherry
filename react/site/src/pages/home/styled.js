
import styled from "styled-components";

const ContainerInicial = styled.div`
  
    display: flex;
    flex-direction: column;

    background-image: url(../../assets/images/onda_esquerda.png);
    background-size: 42em 800em;
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

const BoxSlide = styled.div`

    transition: background 0.4s ease-in;


    input[type=radio] {
        display: none;
    }

    .titulo{
        margin-left: 2em;
        font-size: 3em;

        color: #FF8AB5;
    }

    .cartao{
        position: absolute;
        width: 8em;
        height: 3em;
        cursor: pointer;
        transition: transform 0,10s ease;

    }

    .slide{
        display: flex;
        flex-direction: column;
        transform-style: preserve-3d;
        align-items: center;
    }

    .cartoes{
        display: flex;
        flex-direction: row;
        padding-right: 14em;
        margin-bottom: 80vh;
    }



    #item-1:checked ~ .cartoes #song-3, #item-2:checked ~ .cartoes #song-1, #item-3:checked ~ .cartoes #song-2{
        transform: translateX(-80%) scale(0.8);
        opacity: .4;
        z-index: 0;
    }

    #item-1:checked ~ .cartoes #song-2, #item-2:checked ~ .cartoes #song-3, #item-3:checked ~ .cartoes #song-1{
        transform: translateX(80%) scale(0.8);
        opacity: .4;
        z-index: 0;
    }

    #item-1:checked ~ .cartoes #song-1, #item-2:checked ~ .cartoes #song-2, #item-3:checked ~ .cartoes #song-3{
        transform: translateX(0) scale(1);
        opacity: 1;
        z-index: 1;
    }

    #item-1:checked ~ .cartoes #song-1 img, #item-2:checked ~ .cartoes #song-2 img, #item-3:checked ~ .cartoes #song-3 img{
        box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0,47);
    }


`
const BoxEmAlta = styled.div`
    display: flex;
    flex-direction: column;


    .titulo{
        font-size: 3em;
        margin-left: 2em;
        color: #FF8AB5;
        
    }

    .box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box_em_alta{
        display: flex;
        flex-direction: row;

        height: 20em;
        width: 45em;

        background-color: #a4bcff;
        border-radius: 30px;
        border-style: solid;
        border-color: #FF8AB5;
        border-width: 5px;
    }

    .imagem_emAlta img{
        height: 19.5em;
        width: 18em;

        border: solid;
        border-color: #FF8AB5;
        border-radius: 20px;
    }

    .box_texto{
        text-align: center;
        padding: 2em;

        color: white;
        font-size: 20px;
    }

    .box_texto button {
        background-color: #2F1747;

        color: #ffffff;
        border: none;
        border-radius: 50px;

        width:  190px;
        height: 40px;

        cursor: pointer;

        font-family:  Pacifico;
        font-size: 15px;
    }

    .box_texto button:hover {
        background-color: #52277D;
        transition: all 0.5s ease-in;
    }

    .container_doces{
        display: flex;
        flex-direction: row;

        justify-content: space-around;


    }

`

export {ContainerInicial, BoxSlide, BoxEmAlta}