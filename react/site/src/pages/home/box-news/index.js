import { BoxNovidades } from "./styledbox"
import { useHistory } from "react-router";

import BoxProduto from "../../../components/product/cardProduct";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function BoxNews () {

    const navigation = useHistory();

    const novidades = async () => {
        navigation.push('/novidades')
    }


    return(

        <BoxNovidades>
            <div class="Faixa2_inicio"> 
                <div class="titulo"> Novidades </div>
                <div className="box"> 
                        <Splide
                            options={ {
                                rewind: true,
                                gap   : '1rem',
                                perPage: 4,
                                margin : '1em',
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
                        <SplideSlide>
                            <BoxProduto nome="Trufa" preco="R$ 6,80" imagem="/assets/images/trufa1.jpg"/>
                        </SplideSlide>
                        <SplideSlide>
                            <BoxProduto nome="Kit Kat Cake" preco="R$ 90,99" imagem="/assets/images/bolokitkat.jpg"/>   
                        </SplideSlide>
                        <SplideSlide>
                            <BoxProduto nome="Trufa" preco="R$ 6,80" imagem="/assets/images/trufa1.jpg"/>
                        </SplideSlide>
                        <SplideSlide>
                            <BoxProduto nome="Kit Kat Cake" preco="R$ 90,99" imagem="/assets/images/bolokitkat.jpg"/>   
                        </SplideSlide>
                        <SplideSlide>
                            <BoxProduto nome="Trufa" preco="R$ 6,80" imagem="/assets/images/trufa1.jpg"/>
                        </SplideSlide>
                        </Splide>
                <div class="vermais_novidades">
                    <button onClick={novidades}> Ver Mais </button>
                </div>   
                </div>
            </div>
        </BoxNovidades>
    )
}