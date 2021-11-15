import styled from 'styled-components'

const ContainerCadastro = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F6AAC6;
    cursor: pointer;
    user-select: none;

    .cabecalho-entrar-bem-vindo {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 20px;
        font-family: Pattaya;
        background-image: url(/assets/images/cabecalhoBranco.png);
        background-size: 100% 200px;
        background-repeat: no-repeat;
        height: 200px;
    }

    .bv-titulo {
        font-size: 60px;
        padding-top: 1em;
    }

    .conteudo-entrar-bv {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 3em;
        height: 40vw;
    }

    .img-login img {
        width: 100px;
        height: auto;

        margin-top: -2em;
    }

    .box-input-nome img {
        width: 20px;
        height: auto;

        margin: 0em -1.7em -0.4em 0em;

        position: relative;
    }

    .box-input-usuario img {
        width: 20px;
        height: auto;

        margin: 0em -1.7em -0.5em 0em;

        position: relative;
    }

    .box-input-email img {
        width: 23px;
        height: auto;

        margin: 0em -1.7em -0.4em 0em;

        position: relative;
    }
    
    .box-input-senha {
        position: relative;
    }

    .box-input-senha img {
        width: 22px;
        height: auto;

        margin: 0em -1.7em -0.5em 0em;

        position: relative;
    }

    .inputs-entrarbv {
        display: flex;
        flex-direction: column;

        margin-top: 1em;
    }

    .input-cadastro {
        font-size: 17px;
        font-family: Patua One;
        color: #ffffff;

        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2.5px solid #ffffff;

        background-color: #F6AAC6;

        cursor: text;

        padding: 1.5em 0.5em 0.3em 2em;

        width: 280px;
    }

    .input-cadastro::placeholder {
        text-align: center;
        color: #ffffff;
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

    .botoes-entrarbv button{
        border-radius: 30px;
        border: none;

        background-color: #D1EAF5;

        font-family: Patua One;

        margin-top: 3em;
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

    .bt-criar {
        font-size: 17px;
        color: #140018;

        background-color: #D1EAF5;

        border: none;
        border-radius: 12px;

        padding: 0.3em 3em;
        margin-left: 1em;
    }

    .bt-criar:hover {
        background-color: #b5daeb;
        cursor: pointer;
        transition: 0.5s;
    }

    .conta-adm{
        width: 250px;
        height: 45px;
        font-size: 15px;
    }

    .botoes-um{
        padding-bottom: 5px;
        margin-left: 40px;
    }

    .botao-dois{
        margin-top: 10px;
        margin-left: 15px;
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

    @media(max-width: 430px) {
        .cabecalho-entrar-bem-vindo {
            background-size: 100% 108px;

            height: 110px;
        }
        .bv-titulo {
            font-size: 30px;
            padding-top: 1em;
        }
        .conteudo-entrar-bv {
            height: 84vh;
        }
        .img-login img {
            width: 60px;
            margin-top: -1.5em;
        }
        .box-input-nome img {
            width: 15px;
            margin: 0em -1.3em -0.3em 0em;
        }

        .box-input-email img {
            width: 20px;
            margin: 0em -1.5em -0.3em 0em;
        }
        .box-input-senha img {
            width: 21px;
            margin: 0em -1.5em -0.3em 0em;
        }

        .inputs-entrarbv {
            margin-top: .5em;
        }
        .input-cadastro {
            font-size: 15px;
            border-bottom: 1.7px solid #ffffff;
            padding: 1.5em 0.3em .3em 1em;
        }
        .botoes-entrarbv button{
            border-radius: 15px;
            margin-top: 2em;
        }

        .bt-voltar, .bt-criar {
            font-size: 15px;
            padding: .5em 1.5em;
            width: 8em;
        }
        .eye {
            position: absolute;
            top: 1.3em;
            left: 15.5em;
        }
    
        .eye img {
            width: 2em;
        }
    }
`

export { ContainerCadastro }