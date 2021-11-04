
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ContainerInicial = styled.div`
  
    display: flex;
    flex-direction: column;

    background-image: url(../../assets/images/fundo1.svg);
    background-size: 125% auto;
    background-repeat: repeat-y;

    @media (max-width: 1024px){
        background-size: 130% auto;
    }


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
        padding-right: 1.5em;
    }

    .button2{
        display: flex;
        flex-direction: row;

        border-bottom-left-radius: 2em;
        border-top-left-radius: 2em;
        
        background-color: lightblue;
        padding-left: 1.5em;
    }

    .button1, .button2{
        cursor: pointer;

        align-items: center;

        border: none;
        
        width: 15em;
        height: 5em;

        animation-duration: 2s;
    }

    .perfil img, .busca img {
        cursor: pointer;
    }

    .perfil, .busca {
        transition: all 0.2s;
        cursor: pointer;
    }

    .perfil:hover, .busca:hover{
    transform: scale(1.05);
}

`

const BoxSlide = styled.div`

    padding: 5em;

    .titulo{
        margin-left: 2em;
        font-size: 3em;
        color: #FF8AB5;
    }

    .boxSlide{
        display: flex;
        justify-content: center;
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