import { ContainerBoxProduto } from "./styled";

import { Link, useHistory } from 'react-router-dom'
import Cookies from "js-cookie";
import { useState } from "react";

import Api from "../../../service/api";
const api = new Api();

export default function BoxProduto (props){
    const navigation = useHistory();
    
    const [product] = useState(props.info);
    
    const [cliente, setCliente] = useState(JSON.parse(Cookies.get('usuario-logado')).id_cliente);
    const [produto, setProduto] = useState(product.id);
    const [favoritos, setFavoritos] = useState([]);

    console.log(product);
    
    const compra = async () => {
        navigation.push('/compra')
    }

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
        let v = await api.colocarFavoritos(cliente, produto);

        navigation.push('/favoritos/')
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
                            <div className="icone-coracao" onClick={favorito}><img src="/assets/images/coracao-favoritos-compra.svg" alt=""/></div>
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
