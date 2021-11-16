import { ContainerPagamento } from './styled'

import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import { InputPayment } from '../../components/styled/inputsCPay'

import { useHistory } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'

import Cookies from 'js-cookie'

import Api from '../../service/api'
const api = new Api();


function lerUsuarioLogado (navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        toast.error('Você precisa estar logado para fazer o pagamento')
        navigation.push('/login')
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function ConfirmarPagamento(props) {
    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [usu] = useState(usuarioLogado.ds_email);
    const [nmCliente] = useState(usuarioLogado.nm_cliente);


    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [forma_pagamento] = useState('');
    const [numero_do_cartao, setNumero_do_cartao] = useState('');
    const [parcelas, setParcelas] = useState('');

    const voltarCarrinho = async() => {
        navigation.push('/carrinho')
    }

    const finalizarCompra = async () => {
        let r = await api.confirmarPagmento( usu, endereco, numero, complemento, cpf, nascimento, telefone, forma_pagamento, numero_do_cartao, parcelas )
        if (r.erro) {
            toast.error(`${r.erro}`)

        } else {
            navigation.push('/compra-finalizada')
        }
    }

    console.log(finalizarCompra)
    

    return(
        <ContainerPagamento>
            <ToastContainer />
            <div classNameName="fundo-cabecalho">
                <Cabecalho value={nmCliente} />
            </div>

            <div className="conteudo">

                <div className="nome-conteudo">Confirmar pagamento: R$ {props.location.state} </div>
                <div className="conteiner-geral">
                    <div className="conteiner-pes-etrg">
                        <div className="box-itens">
                            <div className="titulo-itens">Itens do seu carrinho:</div>
                            
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
                                        <td>Bolo Red Velvet</td>
                                        <td>25,00</td>
                                        <td>2</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className="dados">
                            <div className="nm-box">Dados pessoais</div>

                            <div className="nm-input">E-mail:</div>
                            <InputPayment value={usu} readOnly={true} />

                            <div className="nm-input">CPF:</div>
                            <InputPayment pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" value={cpf} onChange={e => setCpf(e.target.value)} />

                            <div className="nm-input">Telefone:</div>
                            <InputPayment value={telefone} onChange={e => setTelefone(e.target.value)} />

                            <div className="nm-input">Nascimento:</div>
                            <InputPayment  id="date" type="date" value={nascimento} onChange={e => setNascimento(e.target.value)} />
                        </div>                 
                    </div>

                    <div className="conteiner-pagamento">
                        <div className="box-pg">
                            <div className="nm-box">Pagamento</div>

                            <div className="nm-input">Número do cartão:</div>
                            <InputPayment value={numero_do_cartao} onChange={e => setNumero_do_cartao(e.target.value)} />

                            <div className="nm-input">Parcelas:</div>
                            <select name="listaparcelas" id="" className="parcelas" value={parcelas} onChange={e => setParcelas(e.target.value)}>
                                <option value={1}>1x</option>
                                <option value={2}>2x</option>
                                <option value={3}>3x</option>
                                <option value={4}>4x</option>
                                <option value={5}>5x</option>
                            </select>
                            <div className="nm-input">Nome:</div>
                            <InputPayment value={nmCliente} readOnly={true} />
                        </div>

                        <div className="entrega">
                            <div className="fr-entrega">
                                <div className="nm-box">Entrega</div>
                            </div>

                            <div className="nm-input">Endereço:</div>
                            <InputPayment value={endereco} onChange={e => setEndereco(e.target.value)}/>

                            <div className="box-nurm-comple">

                                <div className="box-numero">
                                    <div className="nm-input">Número:</div>
                                    <InputPayment value={numero} onChange={e => setNumero(e.target.value)}/>
                                </div>

                                <div className="box-complemento">
                                    <div className="nm-input">Complemento:</div>
                                    <InputPayment value={complemento} onChange={e => setComplemento(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="botoes-pgmt">
                            <button onClick={voltarCarrinho} className="vlt-carrinho">Voltar</button>
                            <button onClick={finalizarCompra} className="final-cmpra">Finalizar compra</button>
                        </div>
                       
                    </div>
                </div>
            </div>

            <Rodape />
        </ContainerPagamento>
    )
}