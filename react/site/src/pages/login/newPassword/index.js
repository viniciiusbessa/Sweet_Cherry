import { ContainerNewPassword} from './styled'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api'
const api = new Api();

export default function NovaSenha(props) {
    const navigation = useHistory();

    const [ email ] = useState(props.location.state.email)
    const [ codigo ] = useState(props.location.state.codigo)
    const [ senha, setSenha ] = useState('');

    const newPass = async () => {
        let r = await api.resetarSenha(email, codigo, senha);

        if (r.erro) {
            toast.error(`${r.erro}`)

        } else {
            navigation.push('/login')
        }
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
  <ContainerNewPassword>
      <ToastContainer />
      <div className="cabecalho">
                <div className="titulo">Nova Senha</div>
            </div>

            <div className="conteudo">
                    <div className="box-input-email">
                        <img src="../../assets/images/img-senha-login copy.svg" alt="" />
                        <input className="input-email" type="password" placeholder="Insira sua nova senha" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                        <div className="eye" onClick={mostrarOcultarSenha}><img src="/assets/images/eyeIconWhite.svg" alt="" /></div>
                    </div>
                    

                    <button className="bt-redefinir" onClick={newPass}> Confirmar </button>
            </div>
  </ContainerNewPassword>

 )
}
