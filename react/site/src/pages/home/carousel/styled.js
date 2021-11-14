import styled from "styled-components";

const Carrosel = styled.div`

    padding: 5em;

    .box{
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .nomes{
        font-size: 1em;
        padding-bottom: 2em;
    }
    .titulo{
        margin-left: .5em;
        padding-bottom: 1em;
        font-size: 3em;
        color: #FF8AB5;
    }

    .Minimalista img{
        width: 15.5em;
        height: 13em;
        border-radius: 5em;
        background-color: white;
        cursor: pointer;
    }

    img
    {
            opacity:1;
    }
    img:hover
    {
        opacity: .4;
}

    .Botao button {
        background-color: #2F1747;

        color: #ffffff;
        border: none;
        border-radius: 50px;

        width:  190px;
        height: 40px;
        margin-top: 1.5em;

        cursor: pointer;
        user-select: none;

        font-family:  Pacifico;
        font-size: 15px;
    }

    .botao button:hover {
        background-color: #52277D;
        transition: all 0.5s ease-in;
    }

    
`

export { Carrosel } 