
import { ContainerCabecalho } from './styled'

import { useHistory } from 'react-router-dom'

export default function Cabecalho() {
    const navigation = useHistory();

    const inicio = async () => {
        navigation.push('/')
    }

    const categoria = async () => {
        navigation.push('/destaque')
    }

    const sobreNos = async () => {
        navigation.push('/sobreNos')
    }

    const login = async () => {
        navigation.push('/login')
    }

    const carrinho = async () => {
        navigation.push('/carrinho')
    }

    const favoritos = async () => {
        navigation.push('/favoritos')
    }

    return (
        <ContainerCabecalho>
            <div className="logo-perfil" onClick={inicio}>
                <div className="logo1-perfil">Sweet</div>
                <div className="logo2-perfil">Cherry</div>
            </div>
           
 
            <div className="rotas-perfil">
                <div className="rota-perfil" onClick={inicio}>Início</div>
                <div className="rota-perfil" onClick={categoria}>Categorias</div>
                <div className="rota-perfil" onClick={sobreNos}>Sobre nós</div>
                <div className="rota-perfil" onClick={login}>Login</div>
            </div>

            <div className="box-imgs-perfil">
                <div className="img-carrinho-perfil"><img src="../../assets/images/carrinho.svg" alt="" onClick={carrinho} /> </div>
                <div className="img-favoritos-perfil"><img src="../../assets/images/coracao.svg" alt="" onClick={favoritos}  /> </div>
            </div>
            
        </ContainerCabecalho>
    )
}