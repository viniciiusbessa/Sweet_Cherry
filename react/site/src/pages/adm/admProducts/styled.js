import styled from 'styled-components'

const ContainerAdmProduto = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #F3F7F6;

    padding: 1.5em 2em 2em 2em;

    height: 100%;

    button {
        font-family: Pacifico;
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

        margin: 3em 0em 3em 4em;
    }

    .btn-add-adm2 button {
        background-color: #FF8AB5;

        border-radius: 10px;

        padding: 0.2em;

        font-size: 25px;
    }

    .barra-pesquisa-adm2 input {
        width: 494px;
        height: 40px;

        background: #F3F7F6;

        border: 3px solid #D1EAF5;
        border-radius: 24px;

        margin: 0.4em 0em 0em 15em;
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
        
        left: 690px;
        bottom: 31px;

        width: 24px;
        height: 24px;
        
        cursor: pointer;
    }


    table {
        border: 1px solid #140018;
        border-collapse: collapse;

        font-family: Patua One;
    }

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

export { ContainerAdmProduto }