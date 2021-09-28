
import { ContainerCabecalho } from './styled'

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <div className="logo-perfil">
                <div className="logo1-perfil">Sweet</div>
                <div className="logo2-perfil">Cherry</div>
            </div>

            <div className="rotas-perfil">
                <div className="rota-perfil1"><a href="../pag_inicial/site copy 7.html">Início</a></div>
                <div className="rota-perfil"><a href="../pag_destaque/site copy 4.html">Categorias</a></div>
                <div className="rota-perfil"><a href="../pag_sobre_nos/site.html">Sobre nós</a></div>
                <div className="rota-perfil"><a href="../pag_entrar/bem-vindo/site copy 5.html">Login</a></div>
            </div>

            <div className="box-imgs-perfil">
                <div className="img-carrinho-perfil"><a href="../pag_carrinho/site.html"><img src="../../assets/images/carrinho.svg" alt="" /> </a></div>
                <div className="img-favoritos-perfil"><a href="../pag_favoritos/site.html"><img src="../../assets/images/lupa-com-coracao.svg" alt="" /> </a></div>
            </div>
        </ContainerCabecalho>
    )
}