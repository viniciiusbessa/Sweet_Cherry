import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import BoxProduto from '../../components/product/cardProduct/index'
import LoadingBar from 'react-top-loading-bar';

import { useState, useEffect, useRef } from 'react'

import { Loader } from "../../components/product/loader";

import { ContainerDestaque } from './styled'

import PageChange from '../../components/product/pageChange/index'

import { useHistory } from "react-router";

import Cookies from 'js-cookie'

import Api from '../../service/api'
const api = new Api();


function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function Destaque() {
    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [usu] = useState(usuarioLogado.nm_cliente);

    const [bolos, setBolos] = useState([]);
    const [diversos, setDiversos] = useState([]);
    const [trufas, setTrufas] = useState([]);
    const [cupcakes, setCupcakes] = useState([]);

    const [product, setProduct] = useState([]);

    const [pagina, setPagina] = useState(1);
    const [totalPaginas] = useState(0);

    const [loadingProducts, setLoadingProducts] = useState(true)
    
    const loading = useRef(null);
    
    const [busca, setBusca] = useState('');

    // const produtosFiltrados = products.filter((products) => products.startsWith(busca))

    async function listarCategoria() {
        loading.current.continuousStart();

        setLoadingProducts(true);

        let r1 = await api.listarProdutosCategoria('Bolos');
        let r2 = await api.listarProdutosCategoria('Diversos');
        let r3 = await api.listarProdutosCategoria('Trufas');
        let r4 = await api.listarProdutosCategoria('Cupcakes');

        setBolos(r1);
        setDiversos(r2);
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
    

    const buscarProduto = async (event) => {
        loading.current.continuousStart();

        if(event.type === "keypress" && ( event.charCode !== 13))
        return;

        let r = await api.buscarProdutos(busca);
        setProduct(r);

        loading.current.complete();
    }

    
    // const Minimodeletras = async (resp) => {
    //     if (product.length <= 3)
    //     return resp.send({erro: 'Coloque mais caracteres pf '})
    // }

    
    return (
    <ContainerDestaque>
        <Cabecalho value={usu} />
        <LoadingBar color="#A4BCFF" ref={loading}/>
        <div className="conteudo">
            <div className="buscar">
            <input type="text" id="txtBusca" className="busca" value={busca} onChange={e => setBusca(e.target.value)} onKeyPress={buscarProduto} maxlength="30"/>
                {/* value={product} onChange={(ev) => setProduct(ev.target.value)}*/}
                {/*onChange={(event) => buscarProduto(event)}*/}
                <img src="../../assets/images/ferramenta-lupa 7.png" alt="" onClick={buscarProduto}  />
                
            </div>


            {product.length !== 0 &&
                <div>
                    <div className="nm-box">Resultados da Pesquisa</div>
                    <div className="box-itens">
                        {product.map(item => 
                            <BoxProduto 
                                key={item.id}
                                info={item} />
                        )}
                    </div>
                </div>
            }

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


            <div className="nm-box">Diversos</div>

            <div className="box-itens">

                {loadingProducts && <Loader />}

                {!loadingProducts && 
                diversos.map(item => 
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