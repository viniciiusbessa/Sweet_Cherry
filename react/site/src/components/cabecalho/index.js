
import ContainerCabecalho from './styled'

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <div class="logo-perfil">
                <div class="logo1-perfil">Sweet</div>
                <div class="logo2-perfil">Cherry</div>
            </div>

            <div class="rotas-perfil">
                <div class="rota-perfil1"><a href="../pag_inicial/site copy 7.html">Início</a></div>
                <div class="rota-perfil"><a href="../pag_destaque/site copy 4.html">Categorias</a></div>
                <div class="rota-perfil"><a href="../pag_sobre_nos/site.html">Sobre nós</a></div>
                <div class="rota-perfil"><a href="../pag_entrar/bem-vindo/site copy 5.html">Login</a></div>
            </div>

            <div class="box-imgs-perfil">
                <div class="img-carrinho-perfil"><a href="../pag_carrinho/site.html"><img src="../../assets/images/carrinho.svg" alt="" /> </a></div>
                <div class="img-favoritos-perfil"><a href="../pag_favoritos/site.html"><img src="../../assets/images/lupa-com-coracao.svg" alt="" /> </a></div>
            </div>
        </ContainerCabecalho>
    )
}