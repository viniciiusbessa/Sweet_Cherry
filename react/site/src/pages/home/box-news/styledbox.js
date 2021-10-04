import styled from "styled-components";

const BoxNovidades = styled.div`

.Faixa2_inicio{
    display: flex;
    flex-direction: column;

}

.titulo{
    margin-left: 2em;
    font-size: 3em;

    color: #FF8AB5;
}

.box_novidades{
    display: flex;
    flex-direction: column;
    margin: 2em 15em;


    background-color: #d1eaf5;
    border-radius: 1em;
    border-style: solid;
    border-color: #fff;
    border-width: 5px;
}

.titulo_novidades{
    text-align: center;
    font-size: 25px;
}

.lista{
    display: flex;
    flex-direction: row;
}

.lista1{
    display: flex;
    flex-direction: column;

    font-size: 25px;
}

.imagem_bolo{
    padding: 2em;

}

.imagem_bolo img{
    width: 18em;
    height: 13em;

    border: solid;
    border-color: white;
    border-radius: 1em;
    border-width: 10px;
}

.vermais_novidades{
    display: flex;
    justify-content: center;

    margin-bottom: 2em;
}

.vermais_novidades button {
    background-color: #2F1747;

    color: #ffffff;
    border: none;
    border-radius: 50px;

    width:  190px;
    height: 40px;

    cursor: pointer;

    font-family:  Pacifico;
    font-size: 15px;

    margin: 2em 1em 0em 0em;
}

.vermais_novidades button:hover {
    background-color: #52277D;
    transition: all 0.5s ease-in;
}
`

export {BoxNovidades}