import { BoxNovidades } from "./styledbox"
import { useHistory } from "react-router";

import { useState } from 'react'

import BoxProduto from "../../../components/product/cardProduct";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function BoxNews (props) {
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
                        {props.info.map(item => 
                                <BoxProduto 
                                    key={item.id}
                                    info={item} />
                            )}  
                        </SplideSlide>
                    </Splide>
                    <div class="vermais_novidades">
                        <button onClick={novidades}> Veja Todas as Novidades </button>
                    </div>   
                </div>
            </div>
        </BoxNovidades>
    )
}