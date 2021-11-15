import { ContainerLoginAdm } from './styled'

import { useHistory } from 'react-router-dom'

import { useState } from 'react'

import Cookies from 'js-cookie';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api'
const api = new Api();

export default function LoginAdm() {
    const navigation = useHistory();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [codigo, setCodigo] = useState('');

    const logar = async () => {
        let r = await api.loginAdm(email, senha, codigo)
        if (r.erro) {
            toast.error(`${r.erro}`)

        } else {
            Cookies.set('logado-adm', JSON.stringify(r));
            navigation.push('/inicio-adm')
        }
    }


    const login = async () => {
        navigation.push('/login')
    }

    function mostrarOcultarSenha(){
        var senha = document.getElementById("senha");
        if(senha.type === "password"){
            senha.type = "text";
        } else {
            senha.type = "password";
        }
    }

    return (
        <ContainerLoginAdm>
            <ToastContainer />
            <div className="cabecalho-entrar-bem-vindo">
                <div className="bemvindo-titulo">Bem-vindo(a)</div>
                <div className="bemvindo-titulo1">Administrador</div>
            </div>

            <div className="conteudo-entrar-bv">

                <div className="img-login"><img src="../../assets/images/icone-login.svg" alt="" /> </div>

                <div className="inputs-entrarbv">
                    <div className="box-input-email">
                        <img src="../../assets/images/img-email-login.svg" alt="" />
                        <input className="input-email" type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="box-input-senha">
                        <img src="../../assets/images/img-senha-login.svg" alt="" />
                        <input className="input-senha" type="password" placeholder="Senha" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                         <div className="eye" onClick={mostrarOcultarSenha}><img src="/assets/images/eyeIcon.svg" alt="" /></div> 
                    </div>

                    <div className="box-input-usuario">
                        <img src="../../assets/images/login-usuario-adm.svg" alt="" />
                        <input className="input-senha" type="text" placeholder="Código do usuário" value={codigo} onChange={e => setCodigo(e.target.value)} />
                    </div>
                    
                </div>

                <div className="botoes-entrar-bv">

                    <div className="botoes-um">
                        <button onClick={login} className="bt-voltar"> Voltar </button>
                        <button onClick={logar} className="bt-entrar"> Entrar </button>
                    </div>
                    
                </div>

            </div>
        </ContainerLoginAdm>
    )
}