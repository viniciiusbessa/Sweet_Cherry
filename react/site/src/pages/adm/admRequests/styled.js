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

        transition: 0.5s;
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


    .table-pai {
        border: 2px solid #140018;

        padding: 0em 1em 2em 1em;
        margin-bottom: 3em;
    }

    .box-pedido-cliente {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .nome-cliente {
        color: #000000;
        font-size: 1.4em;

        margin: 1.5em 0em 0em 0em;
    }

    .estado-pedido {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .acoes-titulo {
        color: #000000;
        font-size: 1.2em;
    }

    .box-btns {
        display: flex;
        flex-direction: row;

        margin: 1em 0em 1.5em 0em;
    }

    .btn1 {
        background-color: #FF6F6F;

        font-size: 16px;

        border-radius: 10px;

        padding: 0.3em 0.4em;
    }

    .btn1:hover {
        background-color: #ee5252;
    }

    .btn2 {
        background-color: #96B3FF;

        font-size: 16px;

        border-radius: 10px;

        padding: 0.3em 0.4em;
        margin: 0em 0.5em;
    }

    .btn2:hover {
        background-color: #6989db;
    }

    .btn3 {
        background-color: #54e88f;

        font-size: 16px;

        border-radius: 10px;

        padding: 0.3em 0.4em;

        white-space: nowrap;
    }

    .btn3:hover {
        background-color: #30cf70;
    }

    .table-filha {
        border: 1px solid #140018;
        border-collapse: collapse;

        font-family: Patua One;

        width: 100%;

        white-space: nowrap;
    }

    tr {
        border: 1px solid #140018;
    }

    th {
        border: 1px solid #140018;

        padding: 0.3em 0em 0.5em 0em;
    }

    td {
        border: 1px solid #140018;

        text-align: center;

        padding: 0.5em 0em 0.5em 0em;
    }

    .campo-btns {
        border: none;
    }

    .espaco {
        border: none;
    }

    .espaco1 {
        border: none;
    }
`

export { ContainerAdmPedidos }