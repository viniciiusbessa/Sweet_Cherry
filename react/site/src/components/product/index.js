import { useEffect, useState } from "react";
import BoxProduto from "./cardProduct";
import Cookie from 'js-cookie'
import axios from "axios";
import Loader from "./loader";


export default function Produto(){
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true)
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
                nome:"Kit Kat Cake", preco:"R$ 90,99", imagem:"/assets/images/bolokitkat.png"
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

    async function loader() {
        setLoading(true);

        const resp = await axios.get('http://localhost:3030');
        setProdutos(...resp.data);

        setLoading(false)
    }

    useEffect(() => {
        loader();
    });


    return (
        <div className="products">
            {loading && <Loader/>}

            {!loading && 
            produtos.map(item => 
                <BoxProduto info={item}/>
            )}
        </div>
    )
}