import styled from 'styled-components'

const ConteinerRodape = styled.div`

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
.linha {
    margin-top: 15px;
}

.imagens{
    display: flex;
    justify-content: center;
}

.imagens img{
    border-radius: 1em;
    width: 40em;
    height: 40em;

    margin: 1em;
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

`

export {ConteinerRodape}