import styled from 'styled-components'

const ConteinerRodape = styled.footer`

    background-color: #FF8AB5;
    color: white;

    display: flex;
    flex-direction: row;

    justify-content: center;

    font-size: 18px;

.rodape {
    display: flex;
    flex-direction: row;

    align-items: center;

    margin-top: 30px;
}


.TrabelheConosco, .atendimento, .redes{
    margin: 1em;

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

`

export {ConteinerRodape}