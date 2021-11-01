import styled from 'styled-components'

const ContainerNovidades = styled.div `
    background-image: url(../../assets/images/fundo2.svg);
    background-size: 95% auto;
    background-repeat: repeat-y;
    height: 100%;

    .box-text {
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        text-align: center;

        margin-bottom: 6em;
    }

    .bem-vindo {
        font-size: 30px;
        color: #381c3d;

        text-decoration: underline 5px solid #D1EAF5;
    }

    .descricao {
        font-size: 30px;
        color: #381c3d;

        margin: 0px .5em 0px .5em;

        text-decoration: underline 5px solid #F6AAC6;
    }

    .box-doces{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;


        padding: 4.5em;
    }

    .hoverProduto {
        transition: all ease-in-out .25s;
    }
     
    .hoverProduto:hover {
        transform: translateY(-2em);
    }
`

export { ContainerNovidades }