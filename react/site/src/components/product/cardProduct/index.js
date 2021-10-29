import { ContainerBoxProduto } from "./styled";

import { Link, useHistory } from 'react-router-dom'


export default function BoxProduto (props){
    const navigation = useHistory();
    
    const compra = async () => {
        navigation.push('/compra')
    }

    const carrinho = async () => {
        navigation.push('/carrinho')
    }

    const favoritos = async () => {
        navigation.push('/favoritos')
    }


    return(
        <div className='hoverProduto'>
            <ContainerBoxProduto>
                <div className="doces">

                    <div className="imagem-doce"> <img src={props.info.imagem} alt="" /> </div>
                    <div className="nm-doce">{props.info.produto}</div>

                    <div className="produto">

                        <div className="preco"> R$ {props.info.preco}</div>
                        <div className="icones">
                            <div className="icone-carrinho" onClick={carrinho}><img src="/assets/images/carrinho.svg" alt=""/></div>
                            <div className="icone-coracao" onClick={favoritos}><img src="/assets/images/coracao-favoritos-compra.svg" alt=""/></div>
                        </div>
                        </div>

                        <Link to={{
                            pathname: '/compra',
                            state: props.info
                        }}>
                            <div className="button"> <button onClick={compra}>Ver mais</button> </div>
                        </Link>
                    </div>
            </ContainerBoxProduto>
        </div>
    )
}
