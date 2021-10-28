import "animate.css";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { useHistory } from "react-router";

import Rodape from "../../components/commum/footer";
import Cabecalho from "../../components/commum/header";
import  BoxNews  from "./box-news/index";
import BoxProduto from "../../components/product/cardProduct";

import { BoxSlide } from "./styled";
import { BoxEmAlta } from "./styled";
import { ContainerInicial} from "./styled";

import { useState } from 'react'

import Cookies from 'js-cookie'

export default function Inicial () {
    const [produtos, setProdutos] = useState([]);

    const navigation = useHistory();

    const categorias = async () => {
        navigation.push('/destaque')
    }

    const perfil = async () => {
        navigation.push('/perfil')
    }


    return(


        <ContainerInicial>
            <Cabecalho/>
           
            <div className="F1_home">
                <div className="perfil">
                    <button className="button1 animate__animated animate__bounceInLeft" onClick={perfil}><img src="/assets/images/pesquisa-de-usuario 1.png" alt=""/></button>
                </div>
            
                <div className="busca">
                    <button className="button2 animate__animated animate__bounceInRight" onClick={categorias}><img src="/assets/images/ferramenta-lupa 1.png" alt=""/></button>
                </div>
            </div>
            <BoxNews/>
            <BoxSlide>
                <div className="Faixa3_inicio">
                    <div className="titulo"> Destaques </div>
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
                            {produtos.map(item => 
                                <BoxProduto 
                                    key={item.id}
                                    info={item} />
                            )}  
                            </SplideSlide>
                            <SplideSlide>
                            {produtos.map(item => 
                                <BoxProduto 
                                    key={item.id}
                                    info={item} />
                            )}  
                            </SplideSlide>
                            <SplideSlide>
                            {produtos.map(item => 
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
                        {produtos.map(item => 
                            <BoxProduto 
                                    key={item.id}
                                    info={item} />
                            )}  
                        {produtos.map(item => 
                            <BoxProduto 
                                    key={item.id}
                                    info={item} />
                            )}  
                        {produtos.map(item => 
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