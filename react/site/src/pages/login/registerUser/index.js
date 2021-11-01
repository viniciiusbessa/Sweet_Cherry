import { ContainerCadastro } from './styled'

import { useHistory } from 'react-router-dom'

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie'

import Api from '../../../service/api'
const api = new Api();

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = async () => {

        let r = await api.cadastrar(nome, email, senha)
        if (r.erro) {
            toast.error(`${r.erro}`)

        } else {
            navigation.push('/login')
        }
    }

    const navigation = useHistory();

    const voltar = async () => {
        navigation.push('/login')
    }

    return (
        <ContainerCadastro>
            <ToastContainer />
            <div className="cabecalho-entrar-bem-vindo">
                    <div className="bv-titulo"> Cadastre - se </div>
            </div>

            <div className="conteudo-entrar-bv">

                <div className="img-login"><img src="../../assets/images/icone-login.svg" alt="" /> </div>

                <div className="inputs-entrarbv">
                    <div className="box-input-nome">
                        <img src="../../assets/images/nomecompleto-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="text" placeholder="nome completo" 
                        value={nome} 
                        onChange={e => setNome(e.target.value)} />
                    </div>

                    <div className="box-input-email">
                        <img src="../../assets/images/email-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="text" placeholder="e-mail" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="box-input-senha">
                        <img src="../../assets/images/password-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="password" placeholder="password" 
                        value={senha} 
                        onChange={e => setSenha(e.target.value)} />
                    </div>
                </div>

                <div className="botoes-entrarbv">
                    <button onClick={voltar} className="bt-voltar"> Voltar </button>
                    <button onClick={logar} className="bt-criar"> Criar </button>
                </div>
            </div>
        </ContainerCadastro>
    )
}