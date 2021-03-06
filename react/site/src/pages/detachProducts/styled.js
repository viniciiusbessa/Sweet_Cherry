import styled from 'styled-components'

const ContainerDestaque = styled.div `
    display: flex;
    flex-direction: column;

    background-image: url(../../assets/images/fundo2.svg);
    background-size: 95% auto;
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

        cursor: pointer;
        user-select: none;
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

        justify-content: space-around;

        margin-top: 5em;
    }

    .hoverProduto {
        transition: all ease-in-out .25s;
    }
     
    .hoverProduto:hover {
        transform: translateY(-2em);
    }

    .ordenacao {
        align-self: flex-end;

        margin-top: -3.5em;
    }

    select {
        padding: .2em .6em;

        border-radius: 1em;
        border: 2px solid #FF8AB5;

        margin-right: 1em;
        margin-bottom: 2em;

        outline: none;
    }


    .paginacao {
        display: flex;
        justify-content: center;
        margin-top: 3em;
    }

    @media(max-width: 430px) {
        background-size: 105% auto;

        .conteudo {
            padding: 2em;
        }
        .buscar {
            margin-bottom: 1.5em;
        }
        .buscar img {
            width: 1.5em;
            height: 1.5em;

            margin-top: 1.1em;
            margin-left: -2.4em;

            cursor: pointer;
            user-select: none;
        }
        input {
            width: 20em;
            height: 2.7em;
            border-radius: 20px;
            margin-top: .5em;
            font-size: 16px;
        }
        .nm-box {
            font-size: 1.5em;
            text-decoration: underline 3.5px solid #D1EAF5;
        }
        .box-itens {
            margin-top: .3em;
        }
        .paginacao {
            margin: 1em 0em 1em 0em;
        }
    }
`

export { ContainerDestaque }