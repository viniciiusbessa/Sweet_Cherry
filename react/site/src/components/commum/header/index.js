
import { ContainerCabecalho } from './styled'

import { useHistory } from 'react-router-dom';

import Cookies from 'js-cookie';

// function lerUsuarioLogado () {
//     let logado = Cookies.get('usuario-logado')
//     if (!logado) {
//         return false
//     }

//     let usuarioLogado = JSON.parse(logado);
//     return usuarioLogado;
// }

export default function Cabecalho(props) {
    const navigation = useHistory();
    // let usuarioLogado = lerUsuarioLogado();
    // const [usu] = useState(usuarioLogado.nm_cliente);

    // function usuario () {
    // if(usuarioLogado === null){
    //     return('');
    // }else {
    //     return(usu)
    // }
    // }

    let logado = Cookies.get('usuario-logado')

    const logoff = () => {
        if (!logado) {
            navigation.push('/login')

        } else {
            Cookies.remove('usuario-logado')
            navigation.push('/login')
        }
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

            <div className="box-nome-usuario">
                <div className="ola"> {!logado ? '' : `Olá ${props.value}`} </div>
            </div>          
 
            <div className="rotas-perfil">
                <div className="rota-perfil" onClick={inicio}>Início</div>
                <div className="rota-perfil" onClick={categoria}>Categorias</div>
                <div className="rota-perfil" onClick={sobreNos}>Sobre nós</div>
                <div className="rota-perfil" onClick={logoff}> {!logado ? 'Login' : 'Sair'} </div>
            </div>

            <div className="box-imgs-perfil">
                <div className="img-carrinho-perfil"><img src="../../assets/images/carrinho.svg" alt="" onClick={carrinho} /> </div>
                <div className="img-favoritos-perfil"><img src="../../assets/images/coracao.svg" alt="" onClick={favoritos}  /> </div>
            </div>
            
        </ContainerCabecalho>
    )
}