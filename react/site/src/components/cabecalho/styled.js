import styled from 'styled-components'

const ContainerCabecalho = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    color: #140018;

    padding: 1.5em 0em 1em 0em;

    .logo-perfil {
        display: flex;
        flex-direction: column;
    }

    .logo1-perfil, .logo2-perfil {
        font-size: 35px;
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

    .rotas-perfil a {
        color: #140018;
        text-decoration: none;
    }

    .rota-perfil1 a:hover {
        color: #fff;
        text-decoration: underline;
    }

    .rota-perfil a:hover {
        color: #F6AAC6;
        text-decoration: underline;
    }

    .box-imgs-perfil {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        width: 15%;
        margin-top: 1.3em;
    }
`