import { ContainerAdmPedidos } from './styled'

import { useHistory } from 'react-router-dom'

export default function AdministrarPedidos() {
    const navigation = useHistory();

    const InicioAdm = async () => {
        navigation.push('/inicio-adm')
    }

    return (
    <ContainerAdmPedidos>

        <div class="box-titulo">
            <div class="inicio-adm">
                <button onClick={InicioAdm}><img src="../../../assets/images/casinha-inicio-adm.png" alt="" /> Início  </button>
            </div>                          
        </div>
        <div class="titulo-adm2">Administração / Sweet Cherry</div>

        <div class="box-conteudo-adm2">
            <div class="btn-add-adm2"><button>Administração Pedidos</button></div>
            <div class="barra-pesquisa-adm2">
                <input placeholder="pesquisa" />
                <div class="img-lupa"></div>
            </div>
        </div>

        <table>

            <thead>

                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Itens</th>
                    <th>Valor</th>
                    <th class="campo-btns">Ações/Estado</th>
                    <th class="espaco"></th>
                    <th class="espaco1"></th>
                </tr>
                
            </thead>

            <tbody>

                <tr>
                    <td>1</td>
                    <td>30/09/2021</td>
                    <td>7</td>
                    <td>R$ 19.90</td>
                    <td class="botao-visivel"><button>Preparando</button></td>
                    <td class="botao-visivel1"><button>Pronto</button></td>
                    <td class="botao-visivel2"><button>A caminho</button></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td class="nomeTb-adm2">30/09/2021</td>
                    <td>7</td>
                    <td>R$ 19.90</td>
                    <td class="botao-visivel"><button>Preparando</button></td>
                    <td class="botao-visivel1"><button>Pronto</button></td>
                    <td class="botao-visivel2"><button>A caminho</button></td>
                </tr>

                <tr>
                    <td>3</td>
                    <td class="nomeTb-adm2">30/09/2021</td>
                    <td>7</td>
                    <td>R$ 19.90</td>
                    <td class="botao-visivel"><button>Preparando</button></td>
                    <td class="botao-visivel1"><button>Pronto</button></td>
                    <td class="botao-visivel2"><button>A caminho</button></td>
                </tr>

                <tr>
                    <td>4</td>
                    <td class="nomeTb-adm2">30/09/2021</td>
                    <td>7</td>
                    <td>R$ 19.90</td>
                    <td class="botao-visivel"><button>Preparando</button></td>
                    <td class="botao-visivel1"><button>Pronto</button></td>
                    <td class="botao-visivel2"><button>A caminho</button></td>
                </tr>

                <tr>
                    <td>5</td>
                    <td class="nomeTb-adm2">30/09/2021</td>
                    <td>7</td>
                    <td>R$ 19.90</td>
                    <td class="botao-visivel"><button>Preparando</button></td>
                    <td class="botao-visivel1"><button>Pronto</button></td>
                    <td class="botao-visivel2"><button>A caminho</button></td>
                </tr>

                <tr>
                    <td>6</td>
                    <td class="nomeTb-adm2">30/09/2021</td>
                    <td>7</td>
                    <td>R$ 19.90</td>
                    <td class="botao-visivel"><button>Preparando</button></td>
                    <td class="botao-visivel1"><button>Pronto</button></td>
                    <td class="botao-visivel2"><button>A caminho</button></td>
                </tr>

                <tr>
                    <td>7</td>
                    <td class="nomeTb-adm2">30/09/2021</td>
                    <td>7</td>
                    <td>R$ 19.90</td>
                    <td class="botao-visivel"><button>Preparando</button></td>
                    <td class="botao-visivel1"><button>Pronto</button></td>
                    <td class="botao-visivel2"><button>A caminho</button></td>
                </tr>

                <tr>
                    <td>8</td>
                    <td class="nomeTb-adm2">30/09/2021</td>
                    <td>7</td>
                    <td>R$ 19.90</td>
                    <td class="botao-visivel"><button>Preparando</button></td>
                    <td class="botao-visivel1"><button>Pronto</button></td>
                    <td class="botao-visivel2"><button>A caminho</button></td>
                </tr>

            </tbody>

        </table>

    </ContainerAdmPedidos>
    )
}