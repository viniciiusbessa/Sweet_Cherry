import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import BoxProduto from '../../components/product/cardProduct/index'
import LoadingBar from 'react-top-loading-bar';

import { useState, useEffect, useRef } from 'react'

import { Loader } from "../../components/product/loader";

import { ContainerDestaque } from './styled'

import PageChange from '../../components/product/pageChange/index'

import Api from '../../service/api'
const api = new Api();


export default function Destaque() {
    const [bolos, setBolos] = useState([]);
    const [destaques, setDestaques] = useState([]);
    const [trufas, setTrufas] = useState([]);
    const [cupcakes, setCupcakes] = useState([]);

    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);

    const [loadingProducts, setLoadingProducts] = useState(true)
    
    const loading = useRef(null);
    

    async function listarCategoria() {
        loading.current.continuousStart();

        setLoadingProducts(true);

        let r1 = await api.listarProdutosCategoria('Bolos');
        let r2 = await api.listarProdutosCategoria('Destaques');
        let r3 = await api.listarProdutosCategoria('Trufas');
        let r4 = await api.listarProdutosCategoria('Cupcakes');

        setBolos(r1);
        setDestaques(r2);
        setTrufas(r3);
        setCupcakes(r4);

        setLoadingProducts(false)

        loading.current.complete()
    }


    function irPara(pagina) {
        setPagina(pagina);
    }


    
    useEffect(() => {
       listarCategoria();
    }, [])
    

    return (
    <ContainerDestaque>
        <Cabecalho />
        <LoadingBar color="#A4BCFF" ref={loading}/>
        <div className="conteudo">
            <div className="buscar">
                <input type="text" id="txtBusca" className="busca"/>
                <img src="../../assets/images/ferramenta-lupa 7.png" alt="" />
            </div>

            <div className="nm-box">Destaques</div>

            <div className="box-itens">

                {loadingProducts && <Loader />}

                {!loadingProducts && 
                destaques.map(item => 
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
                {loadingProducts && <Loader />}

                {!loadingProducts &&
                bolos.map(item => 
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
            


            <div className="nm-box">Cupcakes</div>
            <div className="box-itens">
                {loadingProducts && <Loader />}
            
                {!loadingProducts &&
                cupcakes.map(item => 
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
            


            <div className="nm-box">Trufas</div>
            <div className="box-itens">
                {loadingProducts && <Loader />}

                {!loadingProducts &&
                trufas.map(item => 
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

        </div>

        <Rodape />
    </ContainerDestaque>
    )
}