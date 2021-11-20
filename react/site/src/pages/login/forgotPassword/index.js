import { useState } from "react";

import { useHistory } from "react-router";

import { ContainerForgotPass } from "./styled";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api'
const api = new Api();


export default function ForgotPass(){
    const navigation = useHistory();

    const [email, setEmail] = useState('');

    const resetPass = async () => {
        let r = await api.esqueciASenha(email)
        
        if (r.erro) {
            toast.error(`${r.erro}`)

        } else {
            navigation.push('/reset', { email: email })
        }
    }

    const voltar = async () => {
        navigation.push('/login')
    }

    return (
        <ContainerForgotPass>
            <ToastContainer />
            <div className="cabecalho-esqueceu-senha">
                <div className="titulo">Esqueceu sua senha?</div>
            </div>

            <div className="conteudo">
                    <div className="box-input-email">
                        <img src="../../assets/images/img-email-login.svg" alt="" />
                        <input className="input-email" type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <button className="bt-redefinir" onClick={resetPass}> Redefinir senha </button>
                    <button onClick={voltar} className="bt-voltar"> Voltar </button>
            </div>
        </ContainerForgotPass>
    )
}