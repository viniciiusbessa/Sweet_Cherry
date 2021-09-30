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

        margin: 4.5em;
    }

    .buscar {
        margin-bottom: 2em;
    }

    .buscar img{
        width: 2.5em;

        margin-bottom: -0.9em;
        margin-left: -5em;
    }

    input {
        width: 60em;
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
    }

    .linhas {
        margin-top: -1.7em;
    }

    .linhas img {
        height: 0.5em;
    }

    .linha-desta, .linha-cup {
        margin-right: 1em;
    }

    .linha-fas {
        margin-left: 2em;
    }

    .box-doces { 
        display: flex;
        flex-direction: column;
    }

    .box-itens {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        margin-top: 2em;
    }


    .nm-car-fav {
        display: flex;
        flex-direction: row;

        
        margin: 0.5em 0em;
    }

    .preco-produto {
        text-align: center;
        font-size: 1.5em;

        margin-bottom: 0.5em;
    }

    .ver-mais{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ver-mais button {
        font-family: Pattaya;
        border-radius: 20px;

        background-color: #2F1747;
        color: #FFFFFF;

        border-style: none;

        width: 7em;
        height: 2.7em;
    }
`

export { ContainerDestaque }