import styled from 'styled-components'

const ContainerLoginAdm = styled.div`
    display: flex;
    flex-direction: column;

    cursor: pointer;
    user-select: none;

    .cabecalho-entrar-bem-vindo {
        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: Pattaya;

        background-image: url('/assets/images/fundo2.png');
        background-repeat: no-repeat;
        background-size: 100% 240px;

        height: 240px;
    }

    .bemvindo-titulo{
        font-size: 50px;
        padding-top: 0.5em;
    }

    .bemvindo-titulo1 {
        font-size: 50px;
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

    .box-input-senha {
        position: relative;
    }

    .box-input-senha img {
        width: 25px;
        height: auto;

        margin: 0em -1.7em -0.5em 0em;

        position: relative;
    }

    .box-input-usuario img {
        width: 23px;
        height: auto;

        margin: 0em -1.7em -0.5em 0em;

        position: relative;
    }

    .eye {
        position: absolute;
        top: 1em;
        left: 15em;
    }
    
    .eye img {
            width: 2.5em;
            cursor: pointer;
    }

    .inputs-entrarbv {
        display: flex;
        flex-direction: column;

        margin-top: 1em;
    }

    .input-email, .input-senha {
        font-size: 17px;
        font-family: Patua One;
        color: #b3b1b1;


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


    .botoes-entrarbv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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

    .bt-voltar {
        font-size: 17px;
        color: #140018;

        background-color: #D1EAF5;

        border: none;
        border-radius: 12px;

        padding: 0.3em 2em;
        margin-right: 1em;
    }

    .bt-voltar:hover {
        background-color: #b5daeb;
        cursor: pointer;
        transition: 0.5s;
    }

    .bt-entrar {
        font-size: 17px;
        color: #140018;

        background-color: #D1EAF5;

        border: none;
        border-radius: 12px;

        padding: 0.3em 2.2em;
        margin-left: 1em;
    }

    .bt-entrar:hover {
        background-color: #b5daeb;
        cursor: pointer;
        transition: 0.5s;
    }
`

export { ContainerLoginAdm }