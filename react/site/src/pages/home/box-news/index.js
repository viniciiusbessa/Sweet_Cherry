import { BoxNovidades } from "./styledbox"
import { useHistory } from "react-router";

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
                        <div class="titulo_novidades"> Novidades chegando na loja </div>
                        <div class="lista">
                            <div class="imagem_bolo"> <img src="/assets/images/bolo vermelo.png" alt=""/> </div>
                                <div class="lista1">
                                    <p> Novos bolos decorados:</p>
                                    Sabores: 
                                    <ul>
                                        <li> Chocolate </li>
                                        <li> Morango </li>
                                        <li> Doce De Leite </li>
                                    </ul>
                             </div>
                        </div>
                </div>
                <div class="vermais_novidades">
                    <button onClick={novidades}> Ver Mais </button>
                </div>   
                </div>
            </div>
        </BoxNovidades>
    )
}