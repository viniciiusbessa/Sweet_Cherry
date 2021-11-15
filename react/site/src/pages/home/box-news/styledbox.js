import styled from "styled-components";


const BoxNovidades = styled.div`

.Faixa2_inicio {
    display: flex;
    flex-direction: column;
}

@media (max-width: 1440px){
    margin-top: 1em;
}

.titulo{
    margin-left: 2em;
    font-size: 3em;

    color: #FF8AB5;
}

.box{
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 0em 7em 0em  7em;
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

    cursor: pointer;
    user-select: none;

    font-family:  Pacifico;
    font-size: 20px;

    margin: 2em 1em 0em 0em;
    padding: 0.4em 1.2em;
}

.vermais_novidades button:hover {
    background-color: #52277D;
    transition: all 0.5s;
}

@media(max-width:1040px){
    
    .titulo{
        font-size: 30px;
        margin-left: 100px;
        color: #ffffff;
    }

    .vermais_novidades button{
        margin: 20px 40px;
        border-radius: 40px;
        font-size: 15px;
    }
}

@media(max-width: 375px){
    .titulo{
        font-size: 30px;
        margin-left: 1em;
        color: #F6AAC6;
    }
    .vermais_novidades button{
        font-size: 12px;
    }
}
`

export {BoxNovidades}