import { useState } from "react";
import { ContainerForgotPass } from "./styled";

export default function ForgotPass(){

    const [email, setEmail] = useState('');

    return(
        <ContainerForgotPass>
            <div className="cabecalho-esqueceu-senha">
                <div className="titulo">Esqueceu sua senha?</div>
            </div>

            <div className="conteudo">
                    <div className="box-input-email">
                        <img src="../../assets/images/img-email-login.svg" alt="" />
                        <input className="input-email" type="text" placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <button className="bt-redefinir"> Redefinir senha </button>
            </div>
        </ContainerForgotPass>
    )
}