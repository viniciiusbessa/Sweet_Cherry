import { ContainerNewPassword} from './styled'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'


export default function NovaSenha() {

    const [senha, setSenha] = useState('');

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
      <div className="cabecalho">
                <div className="titulo">Nova Senha</div>
            </div>

            <div className="conteudo">
                    <div className="box-input-email">
                        <img src="../../assets/images/img-senha-login copy.svg" alt="" />
                        <input className="input-email" type="password" placeholder="Insira sua nova senha" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>
                    <div className="box-input-email">
                        <img src="../../assets/images/img-senha-login copy.svg" alt="" />
                        <input className="input-email" type="password" placeholder="Confirme sua senha" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>

                    <button className="bt-redefinir"> Confirmar </button>
            </div>
  </ContainerNewPassword>

 )
}
