import { BoxNovidades } from "./styledbox"
import { useHistory } from "react-router";

import cardProduct from "../../../components/product/cardProduct/index";

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
                <div class="box_novidades">
                        <Splide>
                            <SplideSlide>
                                <cardProduct/>
                            </SplideSlide>
                            <SplideSlide>
                                <cardProduct/>
                            </SplideSlide>
                        </Splide>
                </div>
                <div class="vermais_novidades">
                    <button onClick={novidades}> Ver Mais </button>
                </div>   
                </div>
            </div>
        </BoxNovidades>
    )
}