import { ContainerResetPass } from "./styled";
import { useHistory } from "react-router";

import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api'
const api = new Api();

export default function ResetPass(props) {
    const [ email ] = useState(props.location.state.email)
    const [ codigo, setCodigo ] = useState('')

    const navigation = useHistory()

    const validarCodigo = async () => {
        let r = await api.validarCodigo(email, codigo);

        if (r.erro) {
            toast.error(`${r.erro}`)

        } else {
            navigation.push('/newpass', { email: email, codigo: codigo })
        }
    }

    return(
        <ContainerResetPass>
            <ToastContainer />
            <div className="cabecalho">
                <div className="titulo">Redefinir Senha</div>
            </div>

            <div className="conteudo">
                    <div className="box-input-email">
                        <img src="../../assets/images/codeIcon.svg" alt="" />
                        <input className="input-email" type="text" placeholder="Código" 
                            value={codigo} onChange={e => setCodigo(e.target.value)} />
                    </div>

                    <button className="bt-redefinir" onClick={validarCodigo}> Enviar código </button>
            </div>
        </ContainerResetPass>
    )
}