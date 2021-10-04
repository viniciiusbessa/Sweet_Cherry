import { ContainerLogin } from './styled'

import { useHistory } from 'react-router-dom'

export default function Login() {
    const navigation = useHistory();

    const inicio = async () => {
        navigation.push('/')
    }

    const cadastro = async () => {
        navigation.push('/cadastro')
    }

    const loginAdm = async () => {
        navigation.push('/login-adm')
    }

    return (
        <ContainerLogin>
            <div className="cabecalho-entrar-bem-vindo">
                <div className="bemvindo-titulo">Bem-vindo(a)</div>
            </div>

            <div className="conteudo-entrar-bv">

                <div className="img-login"><img src="../../assets/images/icone-login.svg" alt="" /> </div>

                <div className="inputs-entrarbv">
                    <div className="box-input-email">
                        <img src="../../assets/images/img-email-login.svg" alt="" />
                        <input className="input-email" type="text" placeholder="e-mail" />
                    </div>

                    <div className="box-input-senha">
                        <img src="../../assets/images/img-senha-login.svg" alt="" />
                        <input className="input-senha" type="password" placeholder="password"/>
                    </div>
                    
                </div>

                <div className="botoes-entrar-bv">

                    <div className="botoes-um">
                        <button onClick={inicio} className="bt-entrar"> Entrar </button>
                        <button onClick={cadastro} className="bt-criar"> Criar </button>
                    </div>

                    <button onClick={loginAdm} className="conta-adm"> Entrar/Conta Administrativa </button>
                    
                </div>

            </div>
        </ContainerLogin>
    )
}