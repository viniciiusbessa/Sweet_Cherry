import styled from 'styled-components'

const ContainerAdmPedidos = styled.div`
    display: flex;
    flex-direction: column;

    padding: 2em 11em;

    height: 100%;

    button {
        font-family: Patua One;
        color: #fff;

        border: none;

        cursor: pointer;
        user-select: none;

        transition: 0.5s;
    }

    input {
        cursor: pointer;
        user-select: none;
    }

    .box-titulo {
        display: flex;
        flex-direction: row;
    }

    .box-titulo img:hover {
        cursor: pointer;
    }

    .inicio-adm button {
        color: #000;
        font-size: 20px;
        font-family: Pacifico;

        border: none;
        background-color: #A4BCFF;
        border-radius: 20px;
        padding: 0.2em 1em;
    }

    .inicio-adm button:hover {
        background-color: #86a1eb;
    }

    .inicio-adm button img {
        width: 30px;
        height: auto;

        margin-bottom: -0.2em;
    }

    .titulo-adm2 {
        font-size: 35px;
        font-family: Pacifico;

        text-align: center;
    }

    .box-conteudo-adm2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin: 2em 0em 2em 0em;
    }

    .btn-add-adm2 button {
        background-color: #FF8AB5;

        border-radius: 10px;

        padding: 0.2em;

        font-size: 25px;
        font-family: Pacifico;

        white-space: nowrap;
    }

    .barra-pesquisa-adm2 {
        display: flex;
        flex-direction: row;
    }

    .barra-pesquisa-adm2 input {
        width: 520px;
        height: 40px;

        border: 3px solid #D1EAF5;
        border-radius: 24px;

        margin-top: 0.3em;
        margin-right: -1.7em;
        padding: 0.3em 1em;

        cursor: text;

        font-family: Patua One;
        font-size: 16px;
        color: #000;
    }

    .barra-pesquisa-adm2 input::placeholder {
        font-family: Patua One;
        color: #000;
    }

    .barra-pesquisa-adm2:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;

        border: 3px solid #78c4e4;
        transition: 0.5s;
    }

    .img-lupa {
        background: url(../../../assets/images/lupa-pesquisa.png);
        background-size: 24px 24px;
        background-repeat: no-repeat;
        position: relative;

        right: 15px;
        top: 13px;

        width: 24px;
        height: 24px;
        
        cursor: pointer;
    }
`

export { ContainerAdmPedidos }