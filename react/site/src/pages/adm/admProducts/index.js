import TableProduct from './tableProducts/index'
import { ContainerAdmProduto } from './styled'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


import Api from '../../../service/api'
const api = new Api();

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
            <div className="inicio-adm">
                <button onClick={InicioAdm}>
                    <img src="/assets/images/casinha-inicio-adm.png" alt="" /> Início 
                </button>
            </div>
        </div>

        <div className="titulo-adm2">Administração / Sweet Cherry</div>

        <div className="box-conteudo-adm2">
            <div className="btn-add-adm2"><button onClick={AddProduto}>Adicionar Produto</button></div>
            <div className="barra-pesquisa-adm2">
                <input placeholder="pesquisa" /> 
                <div title="pesquisar" className="img-lupa"></div>
            </div>
        </div>

        <TableProduct />

    </ContainerAdmProduto>
    )
}