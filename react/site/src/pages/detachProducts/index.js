import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import BoxProduto from '../../components/product/cardProduct/index'

import { useState, useEffect } from 'react'

import { ContainerDestaque } from './styled'

import Api from '../../service/api'
const api = new Api();

export default function Destaque() {
    const [produtos, setProdutos] = useState([]);
    const [ordenacao, setOrdenacao] = useState('Menor Preço');
    
    async function listar() {
        let r = await api.listarProdutosOrdenados() + ordenacao;
        setProdutos(r);
    }

    useEffect(() => {
    listar();
    }, [ordenacao])
    
    return (
    <ContainerDestaque>
        <Cabecalho />
        
        <div className="conteudo">
            <div className="buscar">
                <input type="text" id="txtBusca" className="busca"/>
                <img src="../../assets/images/ferramenta-lupa 7.png" alt="" />
            </div>

            <div className="nm-box">Destaques</div>

            <div className="ordenacao">
                <select value={ordenacao} 
                    onChange={e => setOrdenacao(e.target.value)} >
                    <option value="Menor Preço"> Menor Preço </option>
                    <option value="Maior Preço"> Maior Preço </option>
                    <option value="A - Z"> A - Z </option>
                    <option value="Z - A"> Z - A </option>
                </select>
            </div>

            <div className="box-itens">
                <BoxProduto nome="Brigadeiro" preco="R$ 19,99" imagem="/assets/images/brigadeiro.png"/>
                <BoxProduto nome="Sonho sabor chocolate" preco="R$ 9,99" imagem="/assets/images/sonho.jpg"/>
                <BoxProduto nome="Red Velvet" preco="R$ 25,99" imagem="/assets/images/bolo vermelo.png"/>
                <BoxProduto nome="Kit Kat Cake" preco="R$ 90,99" imagem="/assets/images/bolokitkat.jpg"/>
            </div>

            <div className="nm-box">Bolos</div>
            <div className="box-itens">
                <BoxProduto nome="Red Velvet" preco="R$ 25,99" imagem="/assets/images/bolo vermelo.png"/>
                <BoxProduto nome="Kit Kat Cake" preco="R$ 90,99" imagem="/assets/images/bolokitkat.jpg"/>
                <BoxProduto nome="Red Velvet" preco="R$ 25,99" imagem="/assets/images/bolo vermelo.png"/>
                <BoxProduto nome="Kit Kat Cake" preco="R$ 90,99" imagem="/assets/images/bolokitkat.jpg"/>
            </div>
            
            <div className="nm-box">Cupcakes</div>
            <div className="box-itens">
                <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcake.jpg"/>
                <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcakemorango.jpg"/>
                <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcake.jpg"/>
                <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcakemorango.jpg"/>
            </div>
            
            <div className="nm-box">Trufas</div>
            <div className="box-itens">
                <BoxProduto nome="Trufa" preco="R$ 6,80" imagem="/assets/images/trufa.jpg"/>
                <BoxProduto nome="Trufa" preco="R$ 6,80" imagem="/assets/images/trufa1.jpg"/>
                <BoxProduto nome="Trufa" preco="R$ 6,80" imagem="/assets/images/trufa.jpg"/>
                <BoxProduto nome="Trufa" preco="R$ 6,80" imagem="/assets/images/trufa1.jpg"/>
            </div>

        </div>

        <Rodape />
    </ContainerDestaque>
    )
}