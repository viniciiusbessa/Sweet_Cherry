import { ContainerAdmProduto } from './styled'

import { useHistory } from 'react-router-dom'

export default function AdministrarProdutos() {
    const navigation = useHistory();

    const InicioAdm = async () => {
        navigation.push('/inicio-adm')
    }

    const AddProduto = async () => {
        navigation.push('/add-produto')
    }

    return (
    <ContainerAdmProduto>

        <div className="box-titulo">
            <div className="inicio-adm"><button onClick={InicioAdm}><img src="../../../assets/images/casinha-inicio-adm.png" alt="" /> Início </button>
            </div>
        </div>
        <div className="titulo-adm2">Administração / Sweet Cherry</div>

        <div className="box-conteudo-adm2">
            <div className="btn-add-adm2"><button>Administração Produtos</button></div>
            <div className="barra-pesquisa-adm2">
                <input placeholder="pesquisa" /> 
                <div className="img-lupa"></div>
            </div>
        </div>

        <table>

            <thead>

                <tr>
                    <th>Nº</th>
                    <th>Nome</th>
                    <th>Img</th>
                    <th>Preço</th>
                    <th>Qtd Máx.</th>
                    <th>Qtd Min.</th>
                    <th>Descrição</th>
                    <th className="campo-btns">Ações</th>
                    <th className="espaco"></th>
                    <th className="espaco"></th>
                </tr>
                
            </thead>

            <tbody>

                <tr>
                    <td>1</td>
                    <td className="nomeTb-adm2">Bolo</td>
                    <td>PNG</td>
                    <td>R$ 19.90</td>
                    <td>8 pedaços(s)</td>
                    <td>1 pedaço(s)</td>
                    <td className="descricaoTb-adm2">Que tal um brigadeiro com sabor diferenciado? Esse é nossa nova sensação, brigadeiro sabor churros!!</td>
                    <td className="botao-visivel"><button onClick={AddProduto}>adicionar</button></td>
                    <td className="botao-visivel1"> <button>editar</button> </td>
                    <td className="botao-visivel2"><button>deletar</button></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Bolo</td>
                    <td>PNG</td>
                    <td>R$ 19.90</td>
                    <td>8 pedaços(s)</td>
                    <td>1 pedaço(s)</td>
                    <td className="descricaoTb-adm2">Que tal um brigadeiro com sabor diferenciado? Esse é nossa nova sensação, brigadeiro sabor churros!!</td>
                    <td className="botao-visivel"><button onClick={AddProduto}>adicionar</button></td>
                    <td className="botao-visivel1"> <button>editar</button> </td>
                    <td className="botao-visivel2"><button>deletar</button></td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Bolo</td>
                    <td>PNG</td>
                    <td>R$ 19.90</td>
                    <td>8 pedaços(s)</td>
                    <td>1 pedaço(s)</td>
                    <td className="descricaoTb-adm2">Que tal um brigadeiro com sabor diferenciado? Esse é nossa nova sensação, brigadeiro sabor churros!!</td>
                    <td className="botao-visivel"><button onClick={AddProduto}>adicionar</button></td>
                    <td className="botao-visivel1"> <button>editar</button> </td>
                    <td className="botao-visivel2"><button>deletar</button></td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Bolo</td>
                    <td>PNG</td>
                    <td>R$ 19.90</td>
                    <td>8 pedaços(s)</td>
                    <td>1 pedaço(s)</td>
                    <td className="descricaoTb-adm2">Que tal um brigadeiro com sabor diferenciado? Esse é nossa nova sensação, brigadeiro sabor churros!!</td>
                    <td className="botao-visivel"><button onClick={AddProduto}>adicionar</button></td>
                    <td className="botao-visivel1"> <button>editar</button> </td>
                    <td className="botao-visivel2"><button>deletar</button></td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Bolo</td>
                    <td>PNG</td>
                    <td>R$ 19.90</td>
                    <td>8 pedaços(s)</td>
                    <td>1 pedaço(s)</td>
                    <td className="descricaoTb-adm2">Que tal um brigadeiro com sabor diferenciado? Esse é nossa nova sensação, brigadeiro sabor churros!!</td>
                    <td className="botao-visivel"><button onClick={AddProduto}>adicionar</button></td>
                    <td className="botao-visivel1"> <button>editar</button> </td>
                    <td className="botao-visivel2"><button>deletar</button></td>
                </tr>

                <tr>
                    <td>6</td>
                    <td>Bolo</td>
                    <td>PNG</td>
                    <td>R$ 19.90</td>
                    <td>8 pedaços(s)</td>
                    <td>1 pedaço(s)</td>
                    <td className="descricaoTb-adm2">Que tal um brigadeiro com sabor diferenciado? Esse é nossa nova sensação, brigadeiro sabor churros!!</td>
                    <td className="botao-visivel"><button onClick={AddProduto}>adicionar</button></td>
                    <td className="botao-visivel1"> <button>editar</button> </td>
                    <td className="botao-visivel2"><button>deletar</button></td>
                </tr>

                <tr>
                    <td>7</td>
                    <td>Bolo</td>
                    <td>PNG</td>
                    <td>R$ 19.90</td>
                    <td>8 pedaços(s)</td>
                    <td>1 pedaço(s)</td>
                    <td className="descricaoTb-adm2">Que tal um brigadeiro com sabor diferenciado? Esse é nossa nova sensação, brigadeiro sabor churros!!</td>
                    <td className="botao-visivel"><button onClick={AddProduto}>adicionar</button></td>
                    <td className="botao-visivel1"> <button>editar</button> </td>
                    <td className="botao-visivel2"><button>deletar</button></td>
                </tr>

                <tr>
                    <td>8</td>
                    <td>Bolo</td>
                    <td>PNG</td>
                    <td>R$ 19.90</td>
                    <td>8 pedaços(s)</td>
                    <td>1 pedaço(s)</td>
                    <td className="descricaoTb-adm2">Que tal um brigadeiro com sabor diferenciado? Esse é nossa nova sensação, brigadeiro sabor churros!!</td>
                    <td className="botao-visivel"><button onClick={AddProduto}>adicionar</button></td>
                    <td className="botao-visivel1"> <button>editar</button> </td>
                    <td className="botao-visivel2"><button>deletar</button></td>
                </tr>

            </tbody>

        </table>

    </ContainerAdmProduto>
    )
}