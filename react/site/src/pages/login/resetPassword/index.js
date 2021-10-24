import { ContainerResetPass } from "./styled";
import { useHistory } from "react-router";

export default function ResetPass(){
    const navigation = useHistory()

    const newPass = async () => {
        navigation.push('/newpass')
    }

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

                    <button className="bt-redefinir" onClick={newPass}> Enviar código </button>
            </div>
        </ContainerResetPass>
    )
}