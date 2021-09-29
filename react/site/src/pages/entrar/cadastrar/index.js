import { ContainerCadastro } from './styled'

import { useHistory } from 'react-router-dom'

export default function Login() {
    const navigation = useHistory();

    const inicio = async () => {
        navigation.push('/inicio')
    }

    return (
        <ContainerCadastro>
            <div className="cabecalho-entrar-bem-vindo">
                    <div className="bv-titulo"> Cadastre - se </div>
            </div>

            <div className="conteudo-entrar-bv">

                <div className="img-login"><img src="../../assets/images/icone-login.svg" alt="" /> </div>

                <div className="inputs-entrarbv">
                    <div className="box-input-nome">
                        <img src="../../assets/images/nomecompleto-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="text" placeholder="nome completo" ></input>
                    </div>

                    <div className="box-input-usuario">
                        <img src="../../assets/images/username-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="text" placeholder="username"></input>
                    </div>

                    <div className="box-input-email">
                        <img src="../../assets/images/email-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="text" placeholder="e-mail"></input>
                    </div>

                    <div className="box-input-senha">
                        <img src="../../assets/images/password-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="password" placeholder="password"></input>
                    </div>
                </div>

                <div className="botoes-entrarbv">
                    <button onClick={inicio} className="bt-criar"> Criar </button>
                </div>
            </div>
        </ContainerCadastro>
    )
}