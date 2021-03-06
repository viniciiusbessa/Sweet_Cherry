import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import { ContainerPerfil } from './styled'


import LoadingBar from 'react-top-loading-bar'

import React, { useEffect, useRef, useState } from 'react'

import { useHistory } from 'react-router-dom'

import Cookies from 'js-cookie'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../service/api'
const api = new Api();

function infoUsu(navigation){
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        toast.warning('Você precisa estar logado para entrar no perfil!')
        navigation.push('/login')
        return false
    }

    let usuario = JSON.parse(logado);
    return usuario;
}

export default function Perfil(props) {
    const navigation = useHistory();
    
    let informacoes = infoUsu(navigation);

    const [/* usu */, setUsu] = useState('')
    const [email] = useState(informacoes.ds_email);
    const [nome] = useState(informacoes.nm_cliente);
    const [endereco] = useState(informacoes.id_endereco);
    const [cpf] = useState(informacoes.ds_cpf);
    const [nascimento] = useState(informacoes.dt_nascimento);
    const [telefone] = useState(informacoes.nr_telefone);

    console.log(endereco)
    

    const loading = useRef(null)

    async function listar() {
        let r = await api.listarClientes;
        setUsu(r);
    }

    
    async function remover(id) {
        confirmAlert({
            title: 'Excluir conta',
            message: `Tem certeza que deseja excluir esta conta ?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                    let r = await api.removerCliente(id);
                    if (r.erro)
                        toast.error(`${r.erro}`);

                    else {
                        toast.success('✔️ Conta excluída com sucesso')
                        navigation.push('/login')
                    }
                }
              },
              {
                label: 'Não'
              }
            ]
        });
    }

    
    useEffect(() => {
        listar();
    }, []);


    return (
    <ContainerPerfil>
        <ToastContainer />
        <LoadingBar color='white' ref={loading}/>
        <Cabecalho value={nome} />
        <div className="conteudo-perfil">

            <div className="info-pessoal-perfil">

                <div className="lado1">
                    <div className="box-dados-conta-perfil">
                        <div className="dados-conta-perfil">Dados Pessoais</div>
                        <div className="box-infos">
                            <img src="../../assets/images/asterisco-perfil.png" alt="" />
                            <div className="email">E-mail:</div>
                        </div>
                        <input className="input-email" value={email} readOnly={true} />
                    </div>

                    <div className="box-dados-pessoais-perfil">
                        <div className="box-infos">
                            <img src="../../assets/images/asterisco-perfil.png" alt="" />
                            <div className="nome">Nome:</div>
                        </div>
                        <input className="input-nome" value={nome} readOnly={true} />

                        <div className="box-infos">
                            <img src="../../assets/images/asterisco-perfil.png" alt="" />
                            <div className="endereco">Endereco:</div>
                        </div>
                        <input className="input-endereco" value={endereco} readOnly={true} />
                    
                        <div className="box-infos">
                            <img src="../../assets/images/asterisco-perfil.png" alt="" />
                            <div className="telefone">Telefone</div>
                        </div>
                        <div className="info-obrigatorio-telefone">Caso a gente precise entrar em contato sobre seus pedidos</div>
                        <input className="input-telefone" value={telefone} readOnly={true} />
                    </div>
                </div>
            

                <div className="lado2">
                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="data">Data de Nascimento</div>
                    </div>
                    <div className="info-obrigatorio-data">Necessário ter maioridade para comprar em nosso site com cartão de crédito</div>
                    <div className="formato">Formato DD/MM/AAAA</div>
                    <input className="input-data" type="date" value={nascimento} readOnly={true} />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="cpf">CPF</div>
                    </div>
                    <div className="info-obrigatorio-cpf">Necessário para emissão de notas fiscais</div>
                    <input className="input-cpf" value={cpf} readOnly={true} />

                    <div className="box-excluir" onClick={remover}>
                        <div className="excluir-conta-perfil">Excluir conta</div>
                        <img src="../../assets/images/Lixeira-perfil.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="info-pedidos">
                <div className="titulo-pedido">Pedidos</div>

                <div className="subtitulo-pedido">Seus pedidos em</div>
                <div className="subtitulo-pedido">andamento estão aqui :)</div>

                <div className="pedido">
                    <div className="dataPedido">Data: 12/08/21</div>
                    <div className="estadoPedido">Estado do pedido: A caminho</div>
                </div>
                <table className="tabela-produtos">
                                <thead className="cabecalho-tabela">
                                    <tr>
                                    <th className="nm_item">Item</th>
                                    <th>Preço</th>
                                    <th>Quantidade</th>
                                    <th></th>
                                    </tr>
                                </thead>

                                <tbody> 
                                         <tr>
                                            <td>bolo</td>
                                            <td>10</td>
                                            <td>3</td>
                                            <td></td>
                                        </tr>
                                </tbody>
                            </table>

                <div className="btn-cancelar-pedido"><button>Cancelar pedido</button></div>
            </div>

        </div>
        <Rodape />
    </ContainerPerfil>
    )
}