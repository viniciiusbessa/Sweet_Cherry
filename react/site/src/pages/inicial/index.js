import Rodape from "../../components/rodape";
import Cabecalho from "../../components/cabecalho";
import BoxProduto from "../../components/box-produto";
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