import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import BoxProduto from '../../components/product/cardProduct/index'
import LoadingBar from 'react-top-loading-bar';

import { useState, useEffect, useRef } from 'react'

import { Loader } from "../../components/product/loader";

import { ContainerDestaque } from './styled'

import PageChange from '../../components/product/pageChange/index'

import { useHistory } from "react-router";


import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    const [bolos, setBolos] = useState({items:[], pagina: 1, totalPaginas: 1});
    const [cupcakes, setCupcakes] = useState({items:[], pagina: 1, totalPaginas: 1});
    const [trufas, setTrufas] = useState({items:[], pagina: 1, totalPaginas: 1});
    const [diversos, setDiversos] = useState({items:[], pagina: 1, totalPaginas: 1});

    const [product, setProduct] = useState([]);

    const [loadingProducts, setLoadingProducts] = useState(true)
    
    const loading = useRef(null);
    
    const [busca, setBusca] = useState('');


    async function listarCategoriaPaginacao() {
        loading.current.continuousStart();

        setLoadingProducts(true);

        let r1 = await api.listarProdutosCategoriaPaginacao('Bolos', bolos.pagina);
        let r2 = await api.listarProdutosCategoriaPaginacao('Cupcakes', cupcakes.pagina);
        let r3 = await api.listarProdutosCategoriaPaginacao('Trufas', trufas.pagina);
        let r4 = await api.listarProdutosCategoriaPaginacao('Diversos', diversos.pagina);
        
        

        setBolos(r1);
        setCupcakes(r2);
        setTrufas(r3);
        setDiversos(r4);

        setLoadingProducts(false)

        loading.current.complete()
    }

    


    useEffect(() => {
        listarCategoriaPaginacao();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bolos.pagina, cupcakes.pagina, trufas.pagina, diversos.pagina])
    

    const buscarProduto = async (event) => {
        loading.current.continuousStart();
        if(event.type === "keypress" && ( event.charCode !== 13))
        return;
        let r = await api.buscarProdutos(busca);
        if (r.erro) {
            toast.warning(r.erro);
        } else {
            setProduct(r);
        }
        loading.current.complete();
    }

    
     //const Minimodeletras = async (resp) => {
        // if (product.length <= 3)
        // return ('');
     //}

    //var input = document.querySelector('input', func)

    
    return (
    <ContainerDestaque>
        <ToastContainer position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Zoom}/>
        <Cabecalho value={usu} />
        <LoadingBar color="#A4BCFF" ref={loading}/>
        <div className="conteudo">
            <div className="buscar">
            <input type="text" id="txtBusca" className="busca" value={busca} onChange={e => setBusca(e.target.value)} onKeyPress={buscarProduto} maxlength="60" minLength="3" />
                <img src="../../assets/images/ferramenta-lupa 7.png" alt="" onClick={buscarProduto }  />
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
                {loadingProducts && <Loader />}
                {loadingProducts && <Loader />}
                {!loadingProducts && 
                bolos.items.map(item => 
                    <BoxProduto 
                        key={item.id}
                        info={item} />
                )}
            </div>

            <div className="paginacao">
                <PageChange 
                    totalPaginas={bolos.totalPaginas}
                    pagina={bolos.pagina}   
                    onPageChange={pag => setBolos({...bolos, pagina: pag}) }
                />
            </div>
            


            <div className="nm-box">Cupcakes</div>
            <div className="box-itens">
                {loadingProducts && <Loader />}
                {loadingProducts && <Loader />}
                {loadingProducts && <Loader />}
            
                {!loadingProducts &&
                cupcakes.items.map(item => 
                    <BoxProduto 
                        key={item.id}
                        info={item} />
                )}
            </div>

            <div className="paginacao">
                <PageChange 
                    totalPaginas={cupcakes.totalPaginas}
                    pagina={cupcakes.pagina}   
                    onPageChange={pag => setCupcakes({...cupcakes, pagina: pag}) }
                />
            </div>
            


            <div className="nm-box">Trufas</div>
            <div className="box-itens">
                {loadingProducts && <Loader />}
                {loadingProducts && <Loader />}
                {loadingProducts && <Loader />}

                {!loadingProducts &&
                trufas.items.map(item => 
                    <BoxProduto 
                        key={item.id}
                        info={item} />
                )}
            </div>

            <div className="paginacao">
                <PageChange 
                    totalPaginas={trufas.totalPaginas}
                    pagina={trufas.pagina}   
                    onPageChange={pag => setTrufas({...trufas, pagina: pag}) }
                />
            </div>


            <div className="nm-box">Diversos</div>

            <div className="box-itens">

                {loadingProducts && <Loader />}
                {loadingProducts && <Loader />}
                {loadingProducts && <Loader />}

                {!loadingProducts && 
                diversos.items.map(item => 
                    <BoxProduto 
                        key={item.id}
                        info={item} />
                )}

            </div>

            <div className="paginacao">
                <PageChange 
                    totalPaginas={diversos.totalPaginas}
                    pagina={diversos.pagina}   
                    onPageChange={pag => setDiversos({...diversos, pagina: pag}) }
                />
            </div>
        </div>

        <Rodape />
    </ContainerDestaque>
    )
}