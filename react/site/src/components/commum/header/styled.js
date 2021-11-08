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
        margin-right: 100px;
        margin-left: 25px;
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

    .rota-perfil{
        margin-right: 0px;

    }

    .box-nome-usuario {
        display: flex;
        flex-direction: row;
        margin-top: 2em;
    }

    .ola {
        font-family: Patua one;
        font-size: 25px;
        text-decoration: underline 4px solid #D1EAF5;

        width: auto;

        margin-top: 0.1em;
        margin-left: -1.5em;
    }


    .box-imgs-perfil {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        width: 15%;
        margin-top: 1.3em;
        margin-left: 70px;
    }

    .img-carrinho-perfil img, .img-favoritos-perfil img {
        cursor: pointer;
        margin-right: 30px;
    }

    .btn-logoff {
        font-size: 18px;

        border-radius: 10px;
        background-color: #d1eaf5;
        border: 1px solid hotpink;

        cursor: pointer;

        height: 50px;
        width: 70px;

        margin-top: 0.2em;
    }

    .btn-logoff:hover {
        background-color: #A4BCFF;
        transition: 0.7s;
    }

    @media(max-width: 1040px){

        display: flex;
        flex-direction: column;
        align-items: center;

        .logo-perfil{
            margin-top: 30px;
            margin-bottom: 10px;
            justify-content: center;
            margin-left: 100px;
        }

        .logo1-perfil, .logo2-perfil{
          font-size: 25px;
        }

        .rotas-perfil{
            font-size: 15px;
            display: flex;
            flex-direction: row;
            margin-left: 80px;
        }

        .rota-perfil{
            margin-right: 20px;
        }


         .box-imgs-perfil{
             margin-left: 10px;
         }

        .box-imgs-perfil img{
            width: 30px;
        }

        .img-carrinho-perfil{
            margin-left: 20px;
            margin-right: 0px;
        }

        .img-favoritos-perfil{
            
        }

        .img-favoritos-perfil img{
          width: 25px;
        }

        .rota-perfil:hover{
        text-decoration: underline;
        color: #000;
        font-size: 15px;

        cursor: pointer;
        }
    }

    .nm-usu {
        font-size: 18px;
        font-weight: 500;
        margin: .5em 1em 0em 0em;
    }
    
`

export { ContainerCabecalho }