import styled from 'styled-components'

const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;

    .cabecalho-entrar-bem-vindo {
        display: flex;
        flex-direction: row;
        justify-content: center;

        font-family: Pattaya;

        background-image: url('/assets/images/fundo2.png');
        background-size: 100% 220px;
        height: 220px;
    }

    .bemvindo-titulo{
        font-size: 60px;
        padding-top: 1em;
    }

    .conteudo-entrar-bv {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 100%;
    }

    .img-login img {
        width: 100px;
        height: auto;

        margin-top: -2em;
    }

    .box-input-email img {
        width: 25px;
        height: auto;

        margin: 0em -1.7em -0.4em 0em;

        position: relative;
    }

    .box-input-senha img {
        width: 25px;
        height: auto;

        margin: 0em -1.7em -0.5em 0em;

        position: relative;
    }

    .inputs-entrarbv {
        display: flex;
        flex-direction: column;

        margin-top: 1em;
    }

    .input-email, .input-senha {
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

    .input-email::placeholder, .input-senha::placeholder {
        text-align: center;
        color: #BBC6C4;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }


    .botoes-entrarbv{
       display: flex;
       flex-direction: column;
    }

    .botoes-um {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin: 3.5em 0em 1.5em 0em;
    }

    .botoes-um button {
        font-family: Patua One;
    }

    .bt-entrar {
        font-size: 17px;
        color: #140018;

        background-color: #D1EAF5;

        border: none;
        border-radius: 12px;

        padding: 0.3em 1.8em;
    }

    .bt-criar {
        font-size: 17px;
        color: #140018;

        background-color: #D1EAF5;

        border: none;
        border-radius: 12px;

        padding: 0.3em 1.8em;
    }

    .conta-adm {
        font-family: Patua One;
        font-size: 16px;
        color: #140018;

        background-color: #D1EAF5;

        border: none;
        border-radius: 12px;

        padding: 0.7em 1.2em;
    }

    .conta-adm:hover, .bt-entrar:hover, .bt-criar:hover {
        background-color: #b5daeb;
        cursor: pointer;
        transition: 0.5s;
    }
`

export { ContainerLogin }