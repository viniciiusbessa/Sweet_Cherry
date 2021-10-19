import styled from "styled-components";

const ContainerForgotPass = styled.div`
    display: flex;
    flex-direction: column;

    .cabecalho-esqueceu-senha {
        display: flex;
        flex-direction: row;
        justify-content: center;

        font-family: Pattaya;

        background-image: url('/assets/images/fundo2.png');
        background-size: 100% 220px;
        height: 220px;
    }

    .titulo{
        font-size: 60px;
        padding-top: 1em;
    }

    .conteudo {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 100%;
        margin-top: 2em;
    }

    .box-input-email img {
        width: 25px;
        height: auto;

        margin: 0em -1.7em -0.4em 0em;

        position: relative;
    }

    .input-email {
        font-size: 17px;
        font-family: Patua One;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2.5px solid #C4C4C4;
        cursor: text;
        padding: 1.5em 0.5em 0.3em 2em;
        width: 280px;
    }

    .input-email::placeholder{
        text-align: center;
        color: #BBC6C4;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    .bt-redefinir {
        font-family: Patua One;
        font-size: 17px;
        color: #140018;
        background-color: #D1EAF5;
        border-radius: 39px;
        margin-top: 2em;
        padding: 0.3em 1.8em;
        width: 11em;
        height: 2.5em;
        cursor: pointer;
        border: 1px solid #D1EAF5;
    }

    button:hover {
        background-color: #E8F7FE;
        transition: all 0.5s;
    }
`
export{ContainerForgotPass}