import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import BoxProduto from '../../components/product/cardProduct/index'

import { useState, useEffect } from 'react'

import axios from 'axios'

import { ContainerDestaque } from './styled'

import PageChange from '../../components/product/pageChange/index'

import Api from '../../service/api'
const api = new Api();


export default function Destaque() {
    const [bolos, setBolos] = useState([]);
    const [destaques, setDestaques] = useState([]);
    const [trufas, setTrufas] = useState([]);
    const [cupcakes, setCupcakes] = useState([]);

    const [ordenacao, setOrdenacao] = useState('Menor Preço');

    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);
    

    async function listarOrdenacao() {
        let r1 = await api.listarProdutosOrdenados('Bolos');
        let r2 = await api.listarProdutosOrdenados('Destaques');
        let r3 = await api.listarProdutosOrdenados('Trufas');
        let r4 = await api.listarProdutosOrdenados('Cupcakes');

        setBolos(r1);
        setDestaques(r2);
        setTrufas(r3);
        setCupcakes(r4);
    }


    async function listarPaginacao() {
        // const r = await api.listarPaginacao();
        // console.log(r);
    }


    function irPara(pagina) {
        setPagina(pagina);
    }


    useEffect(() => {
        listarOrdenacao();
    }, [ordenacao])

    //useEffect(() => {
    //    listarPaginacao();
    //}, [pagina])
    


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

                {destaques.map(item => 
                    <BoxProduto 
                        key={item.id}
                        info={item} />
                )}

            </div>

            <div className="paginacao">
                <PageChange 
                    totalPaginas={totalPaginas}
                    pagina={pagina}   
                    onPageChange={irPara}
                />
            </div>



            <div className="nm-box">Bolos</div>
            <div className="box-itens">
                {bolos.map(item => 
                    <BoxProduto 
                        key={item.id_produto}
                        info={item} />
                )}
            </div>

            <div className="paginacao">
                <PageChange 
                    totalPaginas={totalPaginas}
                    pagina={pagina}   
                    onPageChange={irPara}
                />
            </div>
            


            <div className="nm-box">Cupcakes</div>
            <div className="box-itens">
                {cupcakes.map(item => 
                    <BoxProduto 
                        key={item.id_produto}
                        info={item} />
                )}
            </div>

            <div className="paginacao">
                <PageChange 
                    totalPaginas={totalPaginas}
                    pagina={pagina}   
                    onPageChange={irPara}
                />
            </div>
            


            <div className="nm-box">Trufas</div>
            <div className="box-itens">
                {trufas.map(item => 
                    <BoxProduto 
                        key={item.id_produto}
                        info={item} />
                )}
            </div>

            <div className="paginacao">
                <PageChange 
                    totalPaginas={totalPaginas}
                    pagina={pagina}   
                    onPageChange={irPara}
                />
            </div>

        </div>

        <Rodape />
    </ContainerDestaque>
    )
}