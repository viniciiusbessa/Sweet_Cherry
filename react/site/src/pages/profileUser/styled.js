import styled from 'styled-components'

const ContainerPerfil = styled.div `
    display: flex;
    flex-direction: column;

    background-image: url(../../assets/images/fundo2.svg);
    background-size: 105% auto;
    background-repeat: repeat-y;
    background-position: left;

    height: 100%;

        .conteudo-perfil {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: .5em;
            margin-bottom: 2.5em;
        }

        .info-pessoal-perfil {
            display: flex;
            flex-direction: row;
        }

        .box-titulo-pedido {
            display: flex;
            flex-direction: column;
            align-items: center;

            cursor: pointer;
            user-select: none;
        }

        .dados-conta-perfil, .dados-pessoais-perfil {
            font-size: 20px;
            margin-left: 1.5em;
            margin-bottom: 0.5em;
            cursor: pointer;
            user-select: none;
        }

        .box-infos {
            display: flex;
            flex-direction: row;

            font-family: Patua One;
            font-size: 15px;
            margin-left: 1em;
            cursor: pointer;
            user-select: none;
        }

        .box-infos > div {
            margin-left: 0.3em;
            margin-top: -0.1em;
        }

        .box-infos img {
            width: 10px;
            height: 10px;
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
            font-size: 13px;
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

        .lado2 {
            margin-left: 2em;
            margin-top: 2.5em;
        }

        .lado1 {
            margin-left: -7em
        }

        .formato {
            font-size: 13px;
            color: #FBE8FF;
            font-family: Patua One;

            margin: 0.3em 0em 0.5em 3em;

            cursor: pointer;
            user-select: none;
        }

        .box-excluir {
            display: flex;
            flex-direction: row;

            margin: 0.3em 0em 0em 3em;

            font-family: Patua One;
            font-size: 20px;
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
        }

        .titulo-pedido {
            font-size: 35px;
            margin-bottom: 0.5em;
            text-decoration: underline 4px solid #F6AAC6;
        }

        .subtitulo-pedido {
            font-size: 18px;
            font-family: Patua One;
            color: #808080;
            user-select: none;
        }

        .box-pedido {
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-top: 1em;
            padding: 1em 0.8em 0.5em 1em;

            background-color: #D1EAF5;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            border-radius: 7px;

            font-size: 23px;
            color: #140018;

            cursor: pointer;
            user-select: none;
        }

        .img-pedidos {
            width: 80px;
            height: 70px;
        }

        .btn-ver-itens button {
            background: #2F1747;
            border-radius: 39px;
            border: none;

            font-family: Pacifico;
            color: #FFF;
            font-size: 15px;
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
            font-size: 18px;

            padding: 0.4em 1em;
            margin: 1.5em 0em 2em 6em;

            cursor: pointer;
            user-select: none;
        }

        .btn-cancelar-pedido button:hover {
            background: #c42c2c;
            cursor: pointer;

            transition: 0.5s;
        }

        table {
            width: 180%;
            margin: 1em 0em 0em 0em;
            background-color: transparent;
            border-collapse: collapse;
            font-size: 16px;
            border-left: 2px solid #D1EAF5;
            border-bottom: 2px solid #D1EAF5;
            border-right: 2px solid #D1EAF5;
        }
        th {
            padding-left: 10px;
            font-weight: 500;
            text-align: left;
            background-color: #D1EAF5;
        }

        .cabecalho-tabela {
            height: 45px;
        }

        td {
            margin: .5em 0em .5em 0em;
            padding: .5em 0em .5em .8em;
        }
        .pedido {
            display: flex;
            flex-direction: row;
            margin-left: -9em;
            font-size: 20px;
        }

        @media(max-width: 1040px){

            background-image: none;
            background-color: #F6AAC6;
            
            .conteudo-perfil{
                display: flex;
                flex-direction: column;
            }

            .lado1{
                margin: 0px;
                margin-top: 35px;
            }

            .lado2{
                margin: 0px;
                margin-left: 35px;
                margin-bottom: 35px;
            }

            .dados-conta-perfil{
                font-size: 25px;
                margin-bottom: 35px;
                margin-left: 60px;
            }

            .box-excluir{
                margin-left: 80px;
            }

            .box-pedido{
                margin-bottom: 25px;
            }

            btn-cancelar-pedido{
                margin-bottom: 25px;
            }
        }

        @media(max-width: 430px) {
            .conteudo-perfil {
                position: relative;
            }
            .info-pessoal-perfil {
                display: flex;
                flex-direction: column;
            }
            .dados-conta-perfil, .dados-pessoais-perfil {
                font-size: 15px;
                margin-bottom: 0.7em;
            }
            .box-infos {
                font-size: 12px;
            }
            .box-infos img {
                width: 7px;
                height: 7px;
            }
            input {
                border-radius: 7px;
                padding: 0em 0.5em;
                margin: 0.4em 0em 1em 2em;
            }
            .input-email, .input-senha, .input-nome, .input-endereco, .input-cpf, .input-telefone {
                height: 26px;
                width: 170px;
            }
            .input-endereco, .input-data, .input-cpf {
                margin-bottom: 1em;
            }
            .input-cpf, .input-telefone {
                margin-top: .5em;
            }
            .input-data {
                height: 26px;
                width: 140px;
            }
            .info-obrigatorio-data, .info-obrigatorio-cpf, .info-obrigatorio-telefone {
                font-size: 10px;
                margin: 0em 0em 0em 2em;
            }
            .lado2 {
                margin-left: 0em;
                margin-top: 0em;
                }

            .formato {
                font-size: 10px;
                margin: .5em 0em 0em 3em;
            }
            .box-excluir {
                display: flex;
                flex-direction: row;

                margin: 2em 0em 0em 3em;
                font-size: 14px;
            }
            .box-excluir img {
                height: 18px;
                width: 25px;
            }
            .titulo-pedido {
                font-size: 16px;
                margin-bottom: 0em;
            }
            .subtitulo-pedido {
                font-size: 12px;
            }
            .box-pedido {
                margin-top: .8em;
                padding: .5em;
                box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
                border-radius: 6px;
                font-size: 14px;
            }
            .img-pedidos {
                width: 60px;
                height: 50px;
            }
            .btn-ver-itens button {
                border-radius: 14px;
                font-size: 10px;
                padding: 0.5em 1.4em;
            }
            .btn-cancelar-pedido button {
                font-size: 14px;
                margin: 1em 0em 2em 6em;
            }
            .info-pedidos {
                position: absolute;
                top: 2.5em;
                left: 13.5em;
            }
        }
`

export { ContainerPerfil }