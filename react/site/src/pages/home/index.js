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
                                <BoxProduto nome="Kit Kat Cake" preco="R$ 90,99" imagem="/assets/images/bolokitkat.jpg"/>   
                            </SplideSlide>
                            <SplideSlide>
                                <BoxProduto nome="Trufa" preco="R$ 6,80" imagem="/assets/images/trufa1.jpg"/>
                            </SplideSlide>
                            <SplideSlide>
                                <BoxProduto nome="Kit Kat Cake" preco="R$ 90,99" imagem="/assets/images/bolokitkat.jpg"/>   
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
                            <BoxProduto nome="Sonho sabor chocolate" preco="R$ 9,99" imagem="/assets/images/sonho.jpg"/>
                            <BoxProduto nome="Cupcake" preco="R$ 15,50" imagem="/assets/images/cupcakemorango.jpg"/>
                            <BoxProduto nome="Trufa" preco="R$ 6,80" imagem="/assets/images/trufa1.jpg"/>

                        </div>
                    </div>
                </div>
            </BoxEmAlta>
            <Rodape/>
        </ContainerInicial>
    )

}