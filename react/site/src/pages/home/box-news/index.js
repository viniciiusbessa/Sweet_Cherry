import { BoxNovidades } from "./styledbox"
import { useHistory } from "react-router";

import BoxProduto from "../../../components/product/cardProduct";

/*import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';*/

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BoxNews (props) {
    const navigation = useHistory();

    const novidades = async () => {
        navigation.push('/novidades')
    }

    const responsive = {
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
      };
      


    return(

        <BoxNovidades>
            <div class="Faixa2_inicio"> 
                <div class="titulo"> Novidades </div>
                <div className="box"> 
                            <Carousel

                                showDots={true}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                >
                                    {props.info.map(item => 
                                        <BoxProduto 
                                            key={item.id}
                                            info={item} />
                                    )}  
                                
                            </Carousel>

                    <div className="vermais_novidades">
                        <button onClick={novidades}> Veja Todas as Novidades </button>
                    </div>   
                </div>
            </div>
        </BoxNovidades>
    )
}