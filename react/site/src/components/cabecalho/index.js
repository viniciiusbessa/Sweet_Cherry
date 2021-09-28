
import { ContainerCabecalho } from './styled'

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <div className="logo-perfil">
                <div className="logo1-perfil">Sweet</div>
                <div className="logo2-perfil">Cherry</div>
            </div>

            <div className="rotas-perfil">
                <div className="rota-perfil1">Início</div>
                <div className="rota-perfil">Categorias</div>
                <div className="rota-perfil">Sobre nós</div>
                <div className="rota-perfil">Login</div>
            </div>

            <div className="box-imgs-perfil">
                <div className="img-carrinho-perfil"><img src="../../assets/images/carrinho.svg" alt="" /> </div>
                <div className="img-favoritos-perfil"><img src="../../assets/images/lupa-com-coracao.svg" alt="" /> </div>
            </div>
        </ContainerCabecalho>
    )
}