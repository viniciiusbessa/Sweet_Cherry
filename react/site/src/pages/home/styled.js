
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

        margin-bottom: 100vh;
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


export {ContainerInicial, BoxSlide}