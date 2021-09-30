import styled from 'styled-components'

const ContainerCadastro = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #F6AAC6;

    .cabecalho-entrar-bem-vindo {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 20px;
        font-family: Pattaya;
        background-image: url(/assets/images/fundo1.png);
        background-size: 100% 200px;

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

        height: 80vh;
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
`

export { ContainerCadastro }