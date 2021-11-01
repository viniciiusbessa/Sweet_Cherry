import { ContainerNewPassword} from './styled'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'


export default function NovaSenha() {
    const navigation = useHistory();
    const [senha, setSenha] = useState('');

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

    function mostrarOcultarSenha1(){
        var senha = document.getElementById("senha1");
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
                        <div className="eye" onClick={mostrarOcultarSenha}><img src="/assets/images/eyeIconWhite.svg" alt="" /></div>
                    </div>
                    <div className="box-input-email">
                        <img src="../../assets/images/img-senha-login copy.svg" alt="" />
                        <input className="input-email" type="password" placeholder="Confirme sua senha" id="senha1" />
                        <div className="eye" onClick={mostrarOcultarSenha1}><img src="/assets/images/eyeIconWhite.svg" alt="" /></div>
                    </div>

                    <button className="bt-redefinir" onClick={login}> Confirmar </button>
            </div>
  </ContainerNewPassword>

 )
}
