import "animate.css"


import Rodape from "../../components/commum/footer";
import Cabecalho from "../../components/commum/header";
import BoxProduto from "../../components/commum/cardProduct/index";

import { ContainerInicial } from "./styled";

export default function inicial () {
    return(
        <ContainerInicial>
            <Cabecalho/>
           
            <div className="F1_home">
                
                    <div className="perfil">
                        <button className="button1 animate__animated animate__bounceInLeft"><img src="/assets/images/pesquisa-de-usuario 1.png" alt=""/></button>
                    </div>
                
                    <div class="busca">
                        <button className="button2 animate__animated animate__bounceInRight"><img src="/assets/images/ferramenta-lupa 1.png" alt=""/></button>
                    </div>
                

            </div>
                <BoxProduto/>
            <Rodape/>
        </ContainerInicial>
    )

}