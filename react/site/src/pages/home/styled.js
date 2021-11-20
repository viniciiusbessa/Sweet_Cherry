
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ContainerInicial = styled.div`
  
    display: flex;
    flex-direction: column;

    background-image: url(../../assets/images/fundo1.svg);
    background-size: 125% auto;
    background-repeat: repeat-y;



    .F1_home{
        display: flex;
        flex-direction: row;

        justify-content: space-between;
        margin-bottom: 30vh;
        margin-top: 30vh;

        cursor: pointer;
        user-select: none;
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
        user-select: none;

        align-items: center;

        border: none;
        
        width: 15em;
        height: 5em;

        animation-duration: 2s;
    }

    .perfil img, .busca img {
        cursor: pointer;
        user-select: none;
    }

    .perfil, .busca {
        transition: all 0.2s;
        cursor: pointer;
        user-select: none;
    }

    .perfil:hover, .busca:hover{
    transform: scale(1.05);
}

@media(max-width: 430px){
    background-size: 105% auto;
    .button1, .button2 {
        width: 10em;
        height: 3em;
    }
    .perfil img, .busca img {
       width: 1.5em;
    }
    .F1_home {
        margin: 7em 0em 5em 0em;
    }
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

    .video video{
        border-radius: 1em;
        margin-bottom: 2em;
    }

    .container_doces{
        display: flex;
        flex-direction: row;

        justify-content: space-around;
    }

    @media(max-width: 1040px){
       
        background-image: transparent;

        .button1{
        display: flex;
        flex-direction: row-reverse;

        border-bottom-right-radius: 2em;
        border-top-right-radius: 2em;

        background-color: red;
        padding-right: 1.5em;

        }

      .titulo{
          color: #A4BCFF;
          margin-right: 0px;
          font-size: 35px;
          padding-left: 25px;
      }

      .box{
          margin: 30px 0px;
          display: flex;
          flex-direction: column;
      }

      .video video{
        border-radius: 1em;
        margin-bottom: 2em;
    } 

      .container_doces{
          display: flex;
          flex-direction: column;
      }
      
    }

    @media(max-width: 430px) {
        margin-top: 2em;

        .titulo{
            font-size: 1.5em;
            margin-left: 0em;
            color: #FF8AB5;
        }
        
        .video video{
        border-radius: 1em;
        margin-bottom: 2em;
        width: 20em;
    } 
    }
`

export {ContainerInicial, BoxEmAlta}