import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { ContainerEstrelasAvaliacao } from './styled';


export default function Estrelas(){
    const [rating, setRating] = useState(0)

    const handRating = (rate) => {
        setRating(rate)
    }

   return (
       <ContainerEstrelasAvaliacao>
                <Rating onClick={handRating} ratingValue={rating}/>
        </ContainerEstrelasAvaliacao>
   )
}