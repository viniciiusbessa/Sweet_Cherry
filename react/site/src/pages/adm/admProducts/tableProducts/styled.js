import styled from 'styled-components'

const ContainerTableProducts = styled.table`
    border: 1px solid #140018;
    border-collapse: collapse;

    font-family: Patua One;

    tr {
        border: 1px solid #140018;
    }

    th {
        border: 1px solid #140018;

        padding: 0.5em 1.5em 1em 1em;

        text-align: left;
    }

    td {
        border: 1px solid #140018;

        padding: 0.2em 1em 0.2em 1em;
    }

    .campo-btns {
        border: none;

        padding: 0.2em 0em 0.2em 1em;

        width: 9%;
    }

    .espaco {
        border: none;

        padding: 0.2em 0em 0.2em 0em;
    }

    .descricaoTb-adm2 {
        width: 15em;
        height: auto;

        font-size: 13px;
    }

    .botao-visivel {
        border: none;

        padding: 0.2em 0em 0.2em 1em;
    }

    .botao-visivel1 {
        border: none;

        padding: 0.2em 0em 0.2em 0em;
    }

    .botao-visivel2 {
        border: none;

        padding: 0.2em 0em 0.2em 0em;
    }

    .botao-visivel button {
        background-color: #54e88f;

        font-size: 16px;

        border-radius: 5px;
    }

    .botao-visivel button:hover {
        background-color: #30cf70;
    }

    .botao-visivel1 button {
        background-color: #96B3FF;

        font-size: 16px;

        border-radius: 5px;
    }

    .botao-visivel1 button:hover {
        background-color: #6989db;
    }

    .botao-visivel2 button {
        background-color: #FF6F6F;

        font-size: 16px;

        border-radius: 5px;
    }

    .botao-visivel2 button:hover {
        background-color: #ee5252;
    }
`

export { ContainerTableProducts }