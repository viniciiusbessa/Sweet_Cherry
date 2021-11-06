import styled from 'styled-components'

const ContainerCabecalho = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #140018;
    
    height: 180px;

    padding: 1.5em 0em 1em 0em;

    cursor: pointer;
    user-select: none;

    .logo-perfil {
        display: flex;
        flex-direction: column;
    }

    .logo1-perfil, .logo2-perfil {
        font-size: 35px;

        cursor: pointer;
    }

    .logo2-perfil {
        margin-left: 30px;

        margin-top: -0.5em;
    }

    .rotas-perfil {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        width: 45%;
        margin-top: 1.3em;

        font-size: 25px;
    }

    .rota-perfil:hover {
        text-decoration: underline;
        color: #000;
        font-size: 26px;

        cursor: pointer;
    }

    .box-imgs-perfil {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        width: 15%;
        margin-top: 1.3em;
    }

    .img-carrinho-perfil img, .img-favoritos-perfil img {
        cursor: pointer;
    }
`

export { ContainerCabecalho }