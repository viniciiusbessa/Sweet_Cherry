import styled from 'styled-components'

const ContainerPerfil = styled.div `
    display: flex;
    flex-direction: column;

    background-image: url(../../assets/images/fundo2.svg);
    background-size: 110% auto;
    background-repeat: repeat-y;
    background-position: left;

    height: 100%;

        .conteudo-perfil {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-bottom: 4em;
        }

        .info-pessoal-perfil {
            display: flex;
            flex-direction: column;

            margin-left: 5em;
        }

        .box-titulo-pedido {
            display: flex;
            flex-direction: column;
            align-items: center;

            cursor: pointer;
            user-select: none;
        }

        .nome-pessoa-perfil {
            font-size: 35px;

            text-decoration: underline 5px solid #D1EAF5;
            text-align: center;
            margin-bottom: 1em;
        }

        .dados-conta-perfil, .dados-pessoais-perfil {
            font-size: 25px;

            margin-left: 1.5em;
            margin-bottom: 0.5em;

            cursor: pointer;
            user-select: none;
        }

        .box-infos {
            display: flex;
            flex-direction: row;

            font-family: Patua One;
            font-size: 17px;

            margin-left: 1em;

            cursor: pointer;
            user-select: none;
        }

        .box-infos > div {
            margin-left: 0.3em;
            margin-top: -0.1em;
        }

        .box-infos img {
            width: 15px;
            height: 15px;
        }

        input {
            color: #140018;
            font-family: Patua One;

            background: #FFFFFF;
            border-radius: 11px;
            border: none;

            padding: 0.5em 0.5em;
            margin: 0.4em 0em 1.5em 3em;

            cursor: text;
        }

        input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        .input-email, .input-senha, .input-nome, .input-endereco {
            height: 32px;
            width: 195px;
        }

        .input-endereco, .input-data, .input-cpf {
            margin-bottom: 2.5em;
        }

        .input-cpf, .input-telefone {
            margin-top: 1em;
        }

        .input-data {
            height: 32px;
            width: 145px;
        }

        .input-cpf, .input-telefone {
            height: 28px;
            width: 175px;
        }

        .info-obrigatorio-data, .info-obrigatorio-cpf, .info-obrigatorio-telefone {
            font-size: 14px;
            color: #FBE8FF;
            font-family: Patua One;

            margin: 0.7em 0em 0em 3em;
        }

        .info-obrigatorio-data {
            width: 18em;

            cursor: pointer;
            user-select: none;
        }

        .info-obrigatorio-cpf {
            width: 11em;

            cursor: pointer;
            user-select: none;
        }

        .info-obrigatorio-telefone {
            width: 15em;

            cursor: pointer;
            user-select: none;
        }

        .formato {
            font-size: 15px;
            color: #FBE8FF;
            font-family: Patua One;

            margin: 0.3em 0em 0.5em 2.8em;

            cursor: pointer;
            user-select: none;
        }

        .box-excluir {
            display: flex;
            flex-direction: row;

            margin-left: 2em;

            font-family: Patua One;
            font-size: 23px;
            color: #FF1A1A;

            cursor: pointer;
            user-select: none;
        }

        .box-excluir:hover {
            color: #b82121;

            cursor: pointer;
            transition: 0.5s;
        }

        .excluir-conta-perfil:hover {
            cursor: pointer;
        }

        .box-excluir img {
            height: 24px;
            width: 35px;

            cursor: pointer;
        }

        .info-pedidos {
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-right: 6em;
        }

        .titulo-pedido {
            font-size: 45px;

            margin-bottom: 0.5em;

            text-decoration: underline 5px solid #F6AAC6;
        }

        .subtitulo-pedido {
            font-size: 23px;
            font-family: Patua One;
            color: #808080;

            user-select: none;
        }

        .box-pedido {
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-top: 4em;
            padding: 1em 0.8em 0.5em 1em;

            background-color: #D1EAF5;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 7px;

            font-size: 25px;
            color: #140018;

            cursor: pointer;
            user-select: none;
        }

        .img-pedidos {
            width: 58px;
            height: 54px;
        }

        .btn-ver-itens button {
            background: #2F1747;
            border-radius: 39px;
            border: none;

            font-family: Pacifico;
            color: #FFF;
            font-size: 20px;

            padding: 0.2em 1.8em;
            margin-top: 0.5em;

            cursor: pointer;
            user-select: none;
        }

        .btn-ver-itens button:hover {
            background: #472666;
            cursor: pointer;

            transition: 0.5s;
        }

        .btn-cancelar-pedido button {
            background: #FF1A1A;
            border-radius: 39px;
            border: none;

            font-family: Pacifico;
            color: #FFF;
            font-size: 25px;

            padding: 0.4em 1em;
            margin: 4em 0em 0em 10em;

            cursor: pointer;
            user-select: none;
        }

        .btn-cancelar-pedido button:hover {
            background: #c42c2c;
            cursor: pointer;

            transition: 0.5s;
        }
`

export { ContainerPerfil }