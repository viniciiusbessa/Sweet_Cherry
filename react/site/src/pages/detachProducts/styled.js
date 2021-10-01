import styled from 'styled-components'

const ContainerDestaque = styled.div `
    display: flex;
    flex-direction: column;

    background-image: url(../../assets/images/onda.png);
    background-size: 40% 600px;
    background-position: left;
    background-repeat: repeat-y;

    .conteudo {
        display: flex;
        flex-direction: column;

        padding: 4.5em;
    }

    .buscar {
        display: flex;
        flex-direction: row;
        justify-content: center;

        margin-bottom: 2em;
    }

    .buscar img {
        width: 2em;
        height: 2em;

        margin-top: 2.2em;
        margin-left: -3.5em;
    }

    input {
        width: 58em;
        height: 4em;

        border: 3px solid #D1EAF5;
        border-radius: 30px;

        margin-top: 1em;
        padding: 0.2em 1em;

        cursor: text;

        font-family: Patua One;
        font-size: 18px;
        color: #140018;
    }

    input:focus {
        border: 3px solid #78c4e4;
        transition: 0.5s;

        box-shadow: 0 0 0 0;
        outline: 0;
    }

    .nm-box {
        font-size: 3em;

        text-decoration: underline 5px solid #D1EAF5;
    }

    .box-itens {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        margin-top: 2em;
    }
`

export { ContainerDestaque }