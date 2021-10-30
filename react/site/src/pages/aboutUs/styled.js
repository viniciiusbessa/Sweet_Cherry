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
            margin-top: 1em;
        }

        .texto p {
            display: flex;
            justify-content: center;

            text-align: center;

            font-size: 1.5em;
            font-family: Patua one;

            padding: 0em 2.3em;

            line-height: 1.5em;
        }

        .texto {
            margin: 0em 4em 0em 4em;
        }

        .imagens{
            display: flex;
            justify-content: center;
            margin: 2em
        }

        .imagens img{
            border-radius: 1em;
            width: 50vw;
            height: 50vh;

            margin: 1em;
            border: solid;
            border-color: #FF8AB5;
            border-width: 10px;
        }
`

export {ContainerSobreNos}