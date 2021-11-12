import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useHistory } from "react-router";


import {Carrosel} from "./styled"

export default function Mini () {
    const navigation = useHistory();

    const categorias = async () => {
        navigation.push('/destaque')
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
        <Carrosel>
            <div className="Faixa3_inicio">
                <div className="titulo"> Categorias </div>
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
                        
                        <div className="Minimalista"> 
                            <div> <img src="/assets/images/bolo-vulcao.jpg" alt=""/> </div>
                            <div className="nomes"> Bolos </div>
                        </div>  
                        <div className="Minimalista"> 
                            <div> <img src="/assets/images/trufa1.jpg" alt=""/> </div>
                            <div className="nomes"> Trufas </div>
                        </div>   
                        <div className="Minimalista"> 
                            <div> <img src="/assets/images/cupcake.jpg" alt=""/> </div>
                            <div className="nomes"> Cupcakes </div>     
                        </div>  
                        <div className="Minimalista"> 
                            <div> <img src="/assets/images/pudim.jpg" alt=""/> </div>
                            <div className="nomes"> Pudins </div>     
                        </div>  
                        <div className="Minimalista"> 
                            <div> <img src="/assets/images/macarrons.jpg" alt=""/> </div>
                            <div className="nomes"> Macarrons </div>     

                        </div>  
                        <div className="Minimalista"> 
                            <div> <img src="/assets/images/doces.jpg" alt=""/> </div>
                            <div className="nomes"> E muito mais! </div>     
                        </div>      

                    </Carousel>
                        <div className="Botao"> 
                            <button onClick={categorias}> Conheça mais categorias!  </button> 
                        </div>
                    </div>
            </div>
            </Carrosel>
    )
}