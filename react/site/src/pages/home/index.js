import "animate.css";

/*import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";*/

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


function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function Inicial () {
    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [novidades, setNovidades] = useState([]);
    const [diversos, setDiversos] = useState([]);
    const [emAlta, setEmAlta] = useState([]);

    const [usu] = useState(usuarioLogado.nm_cliente);

    const loading = useRef(null);

    console.log(Cookies.get('usuario-logado'))

    


    // let logado = Cookies.get('usuario-logado')
    // if (logado === null) {
    //     navigation.push('/login')
        
    // }

    /*const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };*/
      


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
            <Cabecalho value={usu} />
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
                            {diversos.map(item => 
                                <BoxProduto 
                                    key={item.id}
                                    info={item} />
                            )}
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