import styled from 'styled-components'

const ContainerTableRequests = styled.div`
    border: 2px solid #140018;

    padding: 0em 1em 2em 1em;
    margin-bottom: 3em;

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

        cursor: pointer;
        user-select: none;
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

        cursor: pointer;
        user-select: none;
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

export { ContainerTableRequests }