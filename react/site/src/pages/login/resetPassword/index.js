import { ContainerResetPass } from "./styled";

export default function ResetPass(){
    return(
        <ContainerResetPass>
            <div className="cabecalho">
                <div className="titulo">Redefinir Senha</div>
            </div>

            <div className="conteudo">
                    <div className="box-input-email">
                        <img src="../../assets/images/codeIcon.svg" alt="" />
                        <input className="input-email" type="text" placeholder="Código" />
                    </div>

                    <button className="bt-redefinir"> Enviar código </button>
            </div>
        </ContainerResetPass>
    )
}