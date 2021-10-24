import { ConteinerRodape } from "./styled";


export default function Rodape (){

    return(
        <ConteinerRodape>
            <div class="rodape">
                        <div className="TrabelheConosco">
                            <div className="titulo-Trabalhe">Trabalhe Conosco</div>
                            <div className="titulo-Trabalhe">Entre em contato em:</div>
                                <div className="Email">sweetcherryssc7@gmail.com</div>
                        </div>

                        <div className="atendimento">
                            <div className="titulo-atendimento">Fale Conosco</div>
                            <div className="FormasDeContato"> 
                                <div className="Telefone">Telefone: 0800 99 99 999</div>
                                <div className="Email">Sac: sac@SweetCherry.com.br</div>
                            </div>
                        </div>

                        <div className="redes">
                            <div className="titulo-redes">Redes Sociais</div>
                            <div className="sociais">
                                    <div className="icon"><img src="/assets/images/face.svg" alt=""/></div>
                                    <div className="icon"><img src="/assets/images/insta.svg" alt=""/></div>
                                    <div className="icon"><img src="/assets/images/wpp.svg" alt=""/></div>
                            </div>
                        </div>

                        <div className="logo">
                            <div className="Logo"> <img src="/assets/images/logo-img-adm.svg" alt=""/> </div>
                        </div>
                
            </div>
        </ConteinerRodape>
    )}