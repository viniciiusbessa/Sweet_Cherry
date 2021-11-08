import { ContainerLogin } from './styled'

import { useHistory } from 'react-router-dom'

import { useState } from 'react'

import Cookies from 'js-cookie';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api'
const api = new Api();

export default function Login() {
    const navigation = useHistory();
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const logar = async () => {
        let r = await api.login(email, senha)
        if (r.erro) {
            toast.error(`${r.erro}`)

        } else {
            Cookies.set('usuario-logado', JSON.stringify(r));
            navigation.push('/', {email: email} )
        }
    }


    const cadastro = async () => {
        navigation.push('/cadastro')
    }

    const loginAdm = async () => {
        navigation.push('/login-adm')
    }

    const forgotPass = async() => {
        navigation.push('/forgot')
    }

    const voltar = async() => {
        navigation.push('/')
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
        <ContainerLogin>
            <ToastContainer />
            <div className="cabecalho-entrar-bem-vindo">
                <img className="seta-sair" src="/assets/images/para-tras (1).svg" alt="" onClick={voltar} />
                <div className="bemvindo-titulo">Bem-vindo(a)</div>
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
                    
                </div>

                <div className="botoes-entrar-bv">
                    <div className="esqueceu-senha" onClick={forgotPass}>Esqueceu a senha?</div>
                    <div className="botoes-um">
                        <button onClick={logar} className="bt-entrar"> Entrar </button>
                        <button onClick={cadastro} className="bt-criar"> Criar Conta</button>
                    </div>

                    <button onClick={loginAdm} className="conta-adm"> Entrar/Conta Administrativa </button>
                    
                </div>

            </div>
        </ContainerLogin>
    )
}