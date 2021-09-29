import styled from 'styled-components'

const ContainerCompraFinalizada = styled.div`
    display: flex;
    flex-direction: column;

      .fundo-cabecalho {
            background-color: #F3F7F6;
            background-image: url(../../assets/images/fundo.png);
            background-size: 100% 180px;

            height: 180px;
      }

      .conteudo-compra-finalizada {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;

            background-color: #F3F7F6;
            color: #000;

            height: 75vh;
      }

      .mensagem1-compra-finalizada {
            font-size: 35px;

            margin-top: 1em;
      }

      .mensagem2-compra-finalizada {
            font-size: 35px;
      }

      .mensagem3-compra-finalizada {
            font-size: 35px;
      }

      .mensagem4-compra-finalizada {
            font-size: 35px;
      }

      .btn-voltar-inicio-compra-finalizada button {
            color: #fff;
            font-family: Pacifico;
            font-size: 28px;

            background-color: #2F1747;

            border: none;
            border-radius: 60px;

            width: 11.3em;

            padding: 0em 2em;
            margin: 2em 0em 2em 0em;
      }

      .btn-voltar-inicio-compra-finalizada a {
            color: #fff;
      }

      .btn-voltar-inicio-compra-finalizada button:hover {
            background-color: #522d77;
            transition: 1s;
            cursor: pointer;
      }
`

export { ContainerCompraFinalizada }