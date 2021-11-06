import styled from 'styled-components'

const ContainerAddProduto = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #F3F7F6;
    
    height: 100vh;
    width: 100%;

    .fundo-rodape-add {
        background: url(../../../assets/images/fundo-add-adm2.png), url(../../../assets/images/fundo-traco-add.png);
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: bottom;

        height: 100vh;
    }

    .container-fundo-add {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;

        background: url(../../../assets/images/fundo-add-adm.png), url(../../../assets/images/fundo-traco-add.png);
        background-repeat: no-repeat;
    }

    .titulo-add {
        display: flex;
        flex-direction: column;

        margin-top: 3em;
    }

    .novo-produto-add {
        font-size: 35px;
        text-decoration: underline 6px solid #F6AAC6;

        margin-bottom: 2em;
    }

    .conteudo-add {
        display: flex;
        flex-direction: row;

        font-size: 22px;

        cursor: pointer;
        user-select: none;
    }

    .campo-nome-input {
        margin: -0.2em 0.7em 0em 0em;
    }

    .nome-descricao-add {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        margin-right: 2em;
    }

    .box-input-nome {
        display: flex;
        flex-direction: row;

        margin-bottom: 2.7em;
    }

    .box-input-categoria {
        display: flex;
        flex-direction: row;

        margin-bottom: 2.7em;
    }

    .box-input {
        display: flex;
        flex-direction: row;

        margin-bottom: 2em;
    }

    .box-textarea-desc {
        display: flex;
        flex-direction: row;
    }

    .preco-qtds-add {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .box-input-imagem {
        display: flex;
        flex-direction: row;
    }

    .box-adicionar-produto {
        display: flex;
        flex-direction: column;
    }

    .box-botoes {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-left: 6em;
        margin-top: 1.9em;
    }

    .btn-add-produto button {
        background: #643692;

        border-radius: 20px;
        border: none;

        color: #fff;
        font-family: Pacifico;
        font-size: 17px;

        padding: 0.5em 1.3em;

        cursor: pointer;
    }

    .btn-add-produto button:hover {
        background: #8a61b3;
        transition: 0.5s;
    }

    .btn-voltar button {
        border-radius: 20px;
        border: 2px solid #643692;

        color: #000;
        font-family: Pacifico;
        font-size: 16px;

        padding: 0.2em 1em;
        margin-right: 1em;

        cursor: pointer;
    }

    .btn-voltar button:hover {
        border: 2.5px solid #643692;
    }
`

export { ContainerAddProduto }