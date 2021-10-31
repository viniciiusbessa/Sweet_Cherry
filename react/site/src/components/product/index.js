import { useEffect, useState } from "react";
import BoxProduto from "./cardProduct";
import Cookie from 'js-cookie'
import axios from "axios";
import Loader from "./loader";


import Api from '../../service/api'
const api = new Api();


export default function Produto(){
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(uploadProducts, []);


    async function listar() {
        let r = await api.listarProduto;
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
    }, []);

    useEffect(() => {
        listar();
    }, []);


    return (
        <div className="products">
            {loading && <Loader/>}

            {!loading && 
            produtos.map(item => 
                <BoxProduto />
            )}
        </div>
    )
}