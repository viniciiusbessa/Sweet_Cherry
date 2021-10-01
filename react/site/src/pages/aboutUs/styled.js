import styled from 'styled-components'

const ContainerSobreNos = styled.div`
    display: flex;
    flex-direction: column;

        .fundo-cabecalho {
            background-image: url(../../assets/images/fundo2.png);
            background-size: 100% 180px;

            height: 180px;
        }

        .titulo{
            display: flex;
            justify-content: center;
            font-size: 3em;

            color: #FF8AB5;
        }

        .texto p {
            display: flex;
            justify-content: center;
            text-align: center;
            font-size: 2em;
            font-family: Pacifico;
        }

        .imagens{
            display: flex;
            justify-content: center;
        }

        .imagens img{
            border-radius: 1em;
            width: 50vw;
            height: 60vh;

            margin: 1em;
            border: solid;
            border-color: #FF8AB5;
            border-width: 10px;
        }
`

export {ContainerSobreNos}