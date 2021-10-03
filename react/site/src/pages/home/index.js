import "animate.css"

import Rodape from "../../components/commum/footer";
import Cabecalho from "../../components/commum/header";
import  BoxNews  from "./box-news/index";
import BoxProduto from "../../components/commum/cardProduct";

import { BoxSlide } from "./styled";
import { BoxEmAlta } from "./styled";
import { ContainerInicial} from "./styled";

export default function inicial () {
    return(
        <ContainerInicial>
            <Cabecalho/>
           
            <div className="F1_home">
                    <div className="perfil">
                        <button className="button1 animate__animated animate__bounceInLeft"><img src="/assets/images/pesquisa-de-usuario 1.png" alt=""/></button>
                    </div>
                
                    <div class="busca">
                        <button className="button2 animate__animated animate__bounceInRight"><img src="/assets/images/ferramenta-lupa 1.png" alt=""/></button>
                    </div>
            </div>
                <BoxNews/>
                <BoxSlide>
                    <div class="Faixa3_inicio">
                            <div class="titulo"> Destaques </div>
                            <div class="slide">
                                <input type="radio" name="slider" id="item-1" checked/>
                                <input type="radio" name="slider" id="item-2"/>
                                <input type="radio" name="slider" id="item-3"/>

                                    <div class="cartoes">
                                        <label class="cartao" for="item-1" id="song-1">
                                            <BoxProduto/>
                                        </label>
                                        <label class="cartao" for="item-2" id="song-2">
                                            <BoxProduto/>    
                                        </label>
                                        <label class="cartao" for="item-3" id="song-3">
                                            <BoxProduto/>
                                        </label>
                                    </div>   
                            </div>
                    </div>
                </BoxSlide>
                   <BoxEmAlta>  
                    <div class="Faixa4_inicio">
                        <div class="titulo">Em alta</div>
                        <div class="box_em_alta">
                            <div class="imagem_emAlta">
                                <img src="../../assets/images/macarrons.jpg" alt=""/>
                            </div>
                            <div class="box_texto">
                                <p>Os Deliciosos Macarons chegaram!</p>
                                <p>Delicie-se na sua cor favorita com esses biscoitos</p>
                                <button> Garanta já o seu!  </button>
                            </div>
                        </div>
                            <div class="container_doces">
                                    <BoxProduto/>
                                
                                    <BoxProduto/>
                               
                                    <BoxProduto/>
                            </div>
                    </div>
                </BoxEmAlta>
            <Rodape/>
        </ContainerInicial>
    )

}