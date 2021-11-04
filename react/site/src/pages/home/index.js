import "animate.css";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import LoadingBar from 'react-top-loading-bar';

// import LoaderSpinner from 'react-loader-spinner';

import { useHistory } from "react-router";

import Rodape from "../../components/commum/footer";
import Cabecalho from "../../components/commum/header";
import BoxNews  from "./box-news/index";
import BoxProduto from "../../components/product/cardProduct";

import { BoxSlide } from "./styled";
import { BoxEmAlta } from "./styled";
import { ContainerInicial} from "./styled";

import { useState, useRef, useEffect } from 'react'

import Cookies from 'js-cookie'

import Api from '../../service/api'
const api = new Api();

export default function Inicial () {
    const [novidades, setNovidades] = useState([]);
    const [diversos, setDiversos] = useState([]);
    const [emAlta, setEmAlta] = useState([]);

    const loading = useRef(null);


    let logado = Cookies.get('usuario-logado')
    if (logado === null) {
        navigation.push('/login')
    }


    async function listarCategoria() {
        loading.current.continuousStart();

        let r1 = await api.listarProdutosCategoria('Novidades');
        let r2 = await api.listarProdutosCategoria('diversos');
        let r3 = await api.listarProdutosCategoria('Em alta');

        setNovidades(r1);
        setDiversos(r2);
        setEmAlta(r3);

        loading.current.complete()
    }

    const navigation = useHistory();

    const categorias = async () => {
        navigation.push('/destaque')
    }

    const perfil = async () => {
        navigation.push('/perfil')
    }


    useEffect(() => {
        listarCategoria();
     }, [])

    return(


        <ContainerInicial>
            <Cabecalho/>
            {/* <div className="loader" style={{display: 'flex', justifyContent: 'center'}}>
            <LoaderSpinner
                type="TailSpin"
                color="#ADD8E6"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
            </div> */}
            <LoadingBar color="#A4BCFF" ref={loading}/>
           
            <div className="F1_home">
                <div className="perfil">
                    <button className="button1 animate__animated animate__bounceInLeft" onClick={perfil}><img src="/assets/images/pesquisa-de-usuario 1.png" alt=""/></button>
                </div>
            
                <div className="busca">
                    <button className="button2 animate__animated animate__bounceInRight" onClick={categorias}><img src="/assets/images/ferramenta-lupa 1.png" alt=""/></button>
                </div>
            </div>
            <BoxNews info={novidades}/>
            <BoxSlide>
                <div className="Faixa3_inicio">
                    <div className="titulo">Diversos</div>
                    <div className="boxSlide">
                        <Splide
                            options={ {
                                direction: 'ttb',
                                height   : '35rem',
                                wheel    : true,
                                type   : 'loop',
                                drag   : 'free',
                                } }
                            >
                            <SplideSlide>
                                {diversos.map(item => 
                                    <BoxProduto 
                                        key={item.id}
                                        info={item} />
                                )}  
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </BoxSlide>
            <BoxEmAlta>  
                <div className="Faixa4_inicio">
                    <div className="titulo">Em alta</div>
                    <div className="box">
                    <div className="box_em_alta">
                        <div className="imagem_emAlta">
                            <img src="../../assets/images/macarrons.jpg" alt=""/>
                        </div>
                        <div className="box_texto">
                            <p>Os Deliciosos Macarons chegaram!</p>
                            <p>Delicie-se na sua cor favorita com esses biscoitos</p>
                            <button onClick={categorias}> Garanta já o seu!  </button>
                        </div>
                    </div>
                        <div className="container_doces">
                            {emAlta.map(item => 
                                <BoxProduto 
                                    key={item.id}
                                    info={item} />
                            )}
                        </div>
                    </div>
                </div>
            </BoxEmAlta>
            <Rodape/>
        </ContainerInicial>
    )

}