import { ContainerBoxProduto } from "./styled";

import { Link, useHistory } from 'react-router-dom'
import Cookies from "js-cookie";
import { useState } from "react";

import Api from "../../../service/api";
const api = new Api();


function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function BoxProduto (props){
    const navigation = useHistory();
    
    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [product] = useState(props.info);
    const [cliente, /* setCliente */] = useState(usuarioLogado.id_cliente);
    const [produto, /* setProduto */] = useState(product.id);
   // const [fav, setFav] = useState([])

   // console.log(product);


    function cartItem(){
        let carrinho = Cookies.get('carrinho');
        carrinho = carrinho !== undefined 
                    ? JSON.parse(carrinho) 
                    : [];
         
         if (carrinho.some(item => item.id === product.id) === false)
             carrinho.push({...product, qtd: 1 });

         Cookies.set('carrinho', JSON.stringify(carrinho));
         navigation.push('/carrinho');
    }

    async function favorito(){
        if (!cliente)
            return navigation.push('/login')

        let v = await api.colocarFavoritos(cliente, produto);

        console.log(v)

        navigation.push('/favoritos/')
    }

    async function deletar(id){
        let l = await api.deletarFavorito(id);
        props.fav();
        console.log(l)
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
                            <div className="icone-carrinho" onClick={cartItem}><img src="/assets/images/carrinho.svg" alt=""/></div>
                            <div className="icone-coracao"> 
                                {product.id_favorito >= 1   
                                    ? <img onClick={() => deletar(product.id_favorito)} src="/assets/images/lixeira.svg" alt="" />
                                    : <img onClick={favorito} src="/assets/images/coracao-favoritos-compra.svg" alt="" />   
                                }
                            </div>
                        </div>
                        </div>

                        <Link to={{
                            pathname: '/compra',
                            state: props.info
                        }}>
                            <div className="button"> <button> Ver mais</button> </div>
                        </Link>
                    </div>
            </ContainerBoxProduto>
        </div>
    )
}
