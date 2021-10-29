import { ContainerLoginAdm } from './styled'

import { useHistory } from 'react-router-dom'

export default function LoginAdm() {
    const navigation = useHistory();

    const inicioAdm = async () => {
        navigation.push('/inicio-adm')
    }

    const login = async () => {
        navigation.push('/login')
    }

    return (
        <ContainerLoginAdm>
            <div className="cabecalho-entrar-bem-vindo">
                <div className="bemvindo-titulo">Bem-vindo(a)</div>
                <div className="bemvindo-titulo1">Administrador</div>
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
                        <input className="input-senha" type="password" placeholder="password" />
                        {/* <div className="eye"><img src="/assets/images/eyeIcon.svg" alt="" /></div> */}
                    </div>

                    <div className="box-input-usuario">
                        <img src="../../assets/images/login-usuario-adm.svg" alt="" />
                        <input className="input-senha" type="text" placeholder="id_usuario" />
                    </div>
                    
                </div>

                <div className="botoes-entrar-bv">

                    <div className="botoes-um">
                        <button onClick={login} className="bt-voltar"> Voltar </button>
                        <button onClick={inicioAdm} className="bt-entrar"> Entrar </button>
                    </div>
                    
                </div>

            </div>
        </ContainerLoginAdm>
    )
}