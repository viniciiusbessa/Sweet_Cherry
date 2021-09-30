import Rodape from "../../components/footer";
import Cabecalho from "../../components/header";
import BoxProduto from "../../components/commum/cardProduct/index";

import { ContainerInicial } from "./styled";

export default function inicial () {
    return(
        <ContainerInicial>
            <Cabecalho/>
                <BoxProduto/>
            <Rodape/>
        </ContainerInicial>
    )

}