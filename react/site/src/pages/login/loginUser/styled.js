import styled from 'styled-components'

const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    user-select: none;

    .cabecalho-entrar-bem-vindo {
        display: flex;
        flex-direction: row;
        justify-content: center;

        font-family: Pattaya;

        background-image: url('/assets/images/fundo2.png');
        background-repeat: no-repeat;
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

    .esqueceu-senha {
        font-size: 13px;
        font-family: Patua One;
        color: #BBC6C4;
        text-align: center;
        margin-top: 2em;
        cursor: pointer;
    }

    .esqueceu-senha:hover {
        text-decoration: underline;
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

    .box-input-senha {
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
        color: #b3b1b1;

        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2.5px solid #C4C4C4;

        cursor: text;

        padding: 1.5em 0.5em 0.3em 2em;

        width: 280px;
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

        padding: 0.3em 1.4em;
    }

    .bt-criar {
        font-size: 17px;
        color: #140018;

        background-color: #D1EAF5;

        border: none;
        border-radius: 12px;

        padding: 0.3em 1.4em;
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

    .seta-sair {
        position: absolute;
        left: 3em;
        top: 3em;
        cursor: pointer;
    }

    @media(max-width: 430px) {
        .cabecalho-entrar-bem-vindo {
            background-size: 100% 50%;
        }
        .bemvindo-titulo{
            font-size: 30px;
            padding-top: 1em;
        }
        .seta-sair {
            position: absolute;
            left: 1.5em;
            top: 1.5em;
        }
        .seta-sair svg {
            width: 0em;
        }
        .img-login img {
            width: 60px;
            position: absolute;
            top: 7.5em;
            left: 11em ;
        }
        .box-input-senha, .box-input-email {
            position: relative;
        }
        .box-input-email img {
            width: 20px;
            margin: 0em 0em 0em 0em;
            position: absolute;
            top: 1em;
            left: .5em;
        }
        .box-input-senha img {
            width: 23px;
            margin: 0em 0em 0em 0em;
            position: absolute;
            top: 1em;
            left: .5em;
        }
        .inputs-entrarbv {
            margin-top: 0em;
        }
        .input-email, .input-senha {
            font-size: 15px;
            border-bottom: 2px solid #C4C4C4;
            padding: 1.5em 0em 0em 1em;
            width: 20em;
        }
        .eye {
            top: -.3em;
            left: 15.5em;
        }
        .eye img {
            width: 2.7em;
        }
        .esqueceu-senha {
            font-size: 12px;
            margin-top: 1.5em;
        }
        .botoes-um {
            margin: 2em 0em 1em 0em;
        }
        .bt-entrar, .bt-criar {
            font-size: 15px;
            border-radius: 9px;
            padding: 0.4em 1.6em;
        }
        .conta-adm {
            font-family: Patua One;
            font-size: 15px;
            border-radius: 10px;
        }
    }
`

export { ContainerLogin }