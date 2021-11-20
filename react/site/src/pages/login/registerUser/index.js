import { ContainerCadastro } from './styled'

import { useHistory } from 'react-router-dom'

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api'
const api = new Api();

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = async () => {

        let r = await api.cadastrar(nome, cpf, nascimento, email, senha)
        if (r.erro) {
            toast.error(`${r.erro}`)

        } else {
            navigation.push('/login');
        }
    }

    const navigation = useHistory();

    const voltar = async () => {
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
                        <input className="input-cadastro" type="text" placeholder="Nome completo" 
                        value={nome} 
                        onChange={e => setNome(e.target.value)} />
                    </div>

                    <div className="box-input-email">
                        <img src="../../assets/images/nomecompleto-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="text" placeholder="CPF"
                        value={cpf} 
                        onChange={e => setCpf(e.target.value)} />
                    </div>

                    <div className="box-input-email">
                        <img src="../../assets/images/nomecompleto-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="date" placeholder="Data de nascimento"
                        value={nascimento} 
                        onChange={e => setNascimento(e.target.value)} />
                    </div>

                    <div className="box-input-email">
                        <img src="../../assets/images/email-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="text" placeholder="E-mail"
                        value={email} 
                        onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="box-input-senha">
                        <img src="../../assets/images/password-cadastro.svg" alt="" />
                        <input className="input-cadastro" type="password" placeholder="Senha" id="senha"
                        value={senha} 
                        onChange={e => setSenha(e.target.value)} />
                        <div className="eye" onClick={mostrarOcultarSenha}><img src="/assets/images/eyeIconWhite.svg" alt="" /></div>
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