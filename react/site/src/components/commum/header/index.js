
import { ContainerCabecalho } from './styled'

import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Cabecalho(props) {
    const navigation = useHistory();

    const logoff = () => {
        Cookies.remove('usuario-logado')
        navigation.push('/login')
    }

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

            <div className="box-nome-usuario">
                <div className="ola"> Olá {props.value}</div>
                <button className="btn-logoff" onClick={logoff}> Sair </button>
            </div>

            <div className="box-imgs-perfil">
                <div className="img-carrinho-perfil"><img src="../../assets/images/carrinho.svg" alt="" onClick={carrinho} /> </div>
                <div className="img-favoritos-perfil"><img src="../../assets/images/coracao.svg" alt="" onClick={favoritos}  /> </div>
            </div>
            
        </ContainerCabecalho>
    )
}