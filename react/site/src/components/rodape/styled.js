import styled from 'styled-components'

const ConteinerRodape = styled.footer`

    background-color: #FF8AB5;
    color: white;

    display: flex;
    flex-direction: row;

    justify-content: center;
    height: 120px;

    text-align: center;
    font-size: 18px;

.rodape {
    display: flex;
    flex-direction: row;

    margin-top: 30px;
}

.sociais {
    display: flex;
    flex-direction: row;

    cursor: pointer;
}

.icon img {
    padding-left: 12px;
    margin-top: 10px;
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