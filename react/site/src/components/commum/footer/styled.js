import styled from 'styled-components'

const ConteinerRodape = styled.footer`

    background-color: #FF8AB5;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    user-select: none;

.rodape {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 30px 0px 20px 0px;
    height: 7em;
}

.TrabelheConosco, .atendimento, .redes{
    margin-top: 1em;
    margin-right: 4em;
}

.sociais {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}

.icon img {
    padding-right: 12px;
}


@media(max-width: 1040px){
    .rodape{
    margin: 0px 0px;
    display: flex;
    flex-direction: column;
    height: 350px;
    margin-left: 70px;
    }

    .TrabelheConosco{
        display: flex;
        flex-direction: column;
    }



    .atendimento{
        display: flex;
        flex-direction: column;
        font-size: 15px;
        margin-right: 90px;
    }

    .Email{
        display: flex;
        flex-direction: row;
    }

    .titulo-Trabalhe{
     font-size: 15px;
    }

    .redes{
        font-size: 15px;
        margin-bottom: 15px;

    }

    .titulo-redes{
        margin-right: 135px;
    }

    .logo{
        margin-right: 245px;
        display: flex;
        flex-direction: column;
    }

    .logo img{
        width: 40px;
    }

    .icon img{
        width: 35px;
    }

}

@media(max-width: 430px) {
    font-size: .8em;
    .rodape {
        margin: 10px 0px 0px 0px;
        align-items: flex-start;
        position: relative;
        height: 12em;
    }
    .atendimento {
        font-size: .8em;
        position: absolute;
        right: .3em;
    }
    .titulo-Trabalhe {
        font-size: .9em;
    }
    .TrabelheConosco, .atendimento, .redes{
        margin: 0em 0em 0em 0em;
        font-size: .9em;
    }
    .redes {
        display: flex;
        flex-direction: column;
        margin-top: 2em;
        align-items: center;
    }
    .titulo-redes {
        margin-left: 9em;
    }
    .logo {
        position: absolute;
        top: 5.5rem;
        left: 16rem;
    }
    .sociais {
        margin-top: .5em;
    }
}

`

export {ConteinerRodape}