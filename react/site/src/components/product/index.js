import { useEffect, useState } from "react";
import BoxProduto from "./cardProduct";
import Cookie from 'js-cookie'


export default function Produto(){
    const [produtos, setProdutos] = useState([]);

    useEffect(uploadProducts, []);

    function listar() {
        const r = [
            {
                nome:"Brigadeiro", preco:"R$ 19,99", imagem:"/assets/images/brigadeiro.png"
              },
              {
                nome:"Red Velvet", preco:"R$ 25,99", imagem:"/assets/images/bolovermelho.png"
              },
              {
                nome:"Kit Kat Cake", preco:"R$ 90,99", imagem:"/assets/images/kitkat.png"
              }
        ]

        setProdutos(r);
    }

    function uploadProducts() {
        let produto = Cookie.get('produto');
        produto = produto !== undefined
                    ? JSON.parse(produto)
                    : [];
        setProdutos(produto);
    }


    return (
             <div className="products">
                {produtos.map(item => 
                    <BoxProduto nome={item.nome} preco={item.preco} imagem={item.imagem}/>
                )}
            </div>
    )
}