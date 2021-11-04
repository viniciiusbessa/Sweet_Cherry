import { ContainerBoxProduto } from "./styled";

import { Link, useHistory } from 'react-router-dom'
import Cookies from "js-cookie";
import { useState } from "react";


export default function BoxProduto (props){
    const navigation = useHistory();
<<<<<<< HEAD
    const [product] = useState([]);
=======
    const [product, setProduct] = useState(props.info);
>>>>>>> 558c43281654455cf705e784c6d09479715b4908
    
    
    const compra = async () => {
        navigation.push('/compra')
    }

    const favoritos = async () => {
        navigation.push('/favoritos')
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
