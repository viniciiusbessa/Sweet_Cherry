import { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerCounter = styled.div`
    .box-qtd {
        display: flex;
        flex-direction: row;

        margin-right: 3em;

        border-radius: 20px;
        background-color: #D1EAF5;
        
        & > * {
            background-color: #D1EAF5;
            user-select: none;
        }
    }

    .menos {
        cursor: pointer;
        border-radius: 25px;

        font-size: 1.7em;

        padding-left: 0.4em;
    }

    .quantidade {
        font-size: 1.7em;
        
        padding: 0em 0.5em;
    }

    .mais {
        cursor: pointer;
        border-radius: 25px;

        font-size: 1.7em;

        padding-right: 0.4em;
    }


    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export{ContainerCounter}



export default function Counter(props){
    const [qtd, seQtd] = useState(props.value)

    function increment() {
        if (qtd >= 10)
            return;
        seQtd(qtd+1);
    }

    function decrement() {
        if (qtd === 0)
            return;
        seQtd(qtd-1)
    }


    return(
        <ContainerCounter>
            <div className="box-qtd"> 
                <div className="menos" onClick={decrement}>
                    -
                </div>
                
                <div className="quantidade">
                    {qtd}
                </div>

                <div className="mais" onClick={increment}>
                    +
                </div>
            </div>
        </ContainerCounter>
    )
}