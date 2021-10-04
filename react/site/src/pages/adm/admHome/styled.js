import styled from 'styled-components'

const ContainerAdm = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #F3F7F6;
    background-image: url(../../../assets/images/fundo2.svg);
    background-size: 105% auto;
    background-repeat: repeat-y;
    background-position: left;

    height: 100vh;

    .cabecalho-adm {
        display: flex;
        flex-direction: row;
    }

    .logo-img-adm {
        margin: 1.5em 1.5em 0em 4em;
    }

    .logo-img-adm img {
        height: auto;
        width: 90px;
    }

    .box-cabecalho {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 100%;
    }

    .logo-adm {
        display: flex;
        flex-direction: column;

        margin-top: 1.5em;
    }

    .logo1-adm, .logo2-adm {
    font-size: 35px;
    }

    .logo2-adm {
        margin-left: 30px;

        margin-top: -0.5em;
    }

    .btn-logout button {
        background-color: #FF1A1A;

        border: none;
        border-radius: 30px;

        font-family: Pacifico;
        color: #FFF;
        font-size: 20px;

        padding: 0.5em 2em;
        margin: 2em 2.5em 0em 0em;
    }

    .btn-logout button:hover {
        background-color: #f04646;

        cursor: pointer;
        transition: 0.5s;
    }


    .conteudo-adm {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .texto-escolha-adm {
        font-size: 40px;

        margin-top: 1.5em;
        margin-bottom: 2em;
    }

    .btns-adm {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .btn-add-adm button {
        background-color: #A4BCFF;

        border: none;
        border-radius: 20px;

        font-size: 40px;
        font-family: Pacifico;

        width: 70%;

        padding: 0.5em 1.5em;

        cursor: pointer;
    }

    .btn-add-adm {
        margin-left: 7em;
    }

    .btn-add-adm button:hover {
        background-color: #89a4ee;
        transition: 1s;
    }

    .btn-alt-adm button {
        background-color: #A4BCFF;

        border: none;
        border-radius: 20px;

        font-size: 40px;
        font-family: Pacifico;

        width: 70%;

        padding: 0.5em 2.2em;

        cursor: pointer;
    }

    .btn-alt-adm {
        margin-left: 4em;
    }

    .btn-alt-adm button:hover {
        background-color: #89a4ee;
        transition: 1s;
    }
`

export { ContainerAdm }