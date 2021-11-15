import styled from 'styled-components'

const ContainerSobreNos = styled.div`
    display: flex;
    flex-direction: column;

        .fundo-cabecalho {
            background-image: url(../../assets/images/fundo2.png);
            background-size: 100% 180px;
            background-repeat: no-repeat;
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
            margin: 2em;

            cursor: pointer;
            user-select: none;
        }

        .imagens img{
            border-radius: 1em;
            width: 50vw;
            height: 50vh;

            margin: 1em;
            border: 5px solid #FF8AB5;
        }

        @media(max-width: 430px ) {
            .fundo-cabecalho {
                background-size: 100% 50%;
            }
            .titulo{
                font-size: 1.5em;
                margin-top: .5em;
            }
            .texto p {
                font-size: .8em;
                padding: 0em 0em;

                line-height: 1.3em;
            }
            .texto {
                margin: 0em 2em 0em 2em;
            }
            .imagens{
                margin: .5em;
            }
            .imagens img{
                width: 45vw;
                height: 25vh;
                margin: .5em;
                border: 4px solid #FF8AB5;
            }
        }
`

export {ContainerSobreNos}