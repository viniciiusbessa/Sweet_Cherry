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
        alert('Ei, você precisa estar logado para fazer o pagamento')
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

    // const [email, /* setEmail */] = useState(props.location.state.email);
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    const voltarCarrinho = async() => {
        navigation.push('/carrinho')
    }

    const finalizarCompra = async () => {
        let r = await api.confirmarPagmento(  cpf, telefone, endereco, numero, complemento )
        if (r.erro) {
            toast.error(`${r.erro}`)

        } else {
            navigation.push('/compra-finalizada')
        }
    }

    console.log(finalizarCompra)

    const pagAnterior = async () => {
        window.history.back()
    }


    

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
                        <div className="dados">
                            <div className="nm-box">Dados pessoais</div>

                            <div className="nm-input">E-mail:</div>
                            <InputPayment value={usu} readOnly={true} />

                            <div className="nm-input">CPF:</div>
                            <InputPayment value={cpf} onChange={e => setCpf(e.target.value)} />

                            <div className="nm-input">Telefone:</div>
                            <InputPayment value={telefone} onChange={e => setTelefone(e.target.value)}/>

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
                    </div>

                    <div className="conteiner-pagamento">
                        <div className="box-pg">
                            <div className="nm-box">Pagamento</div>

                            <div className="nm-input">Número do cartão:</div>
                            <InputPayment  />

                            <div className="nm-input">Parcelas:</div>
                            <select name="listaparcelas" id="" className="parcelas">
                                <option>1x</option>
                                <option>2x</option>
                                <option>3x</option>
                                <option>4x</option>
                                <option>5x</option>
                            </select>
                            <div className="nm-input">Nome:</div>
                            <InputPayment value={nmCliente} readOnly={true} />
                        </div>
                        <div className="botoes-pgmt">
                            <button onClick={voltarCarrinho} className="vlt-carrinho">Voltar</button>
                            <button onClick={finalizarCompra} className="final-cmpra">Finalizar compra</button>
                        </div>
                        <div className="box-cartoes">
                            <div className="titulo-box">Pague com:</div>
                            <div className="box-icones">
                                <div className="icons1">
                                    <img src="../../assets/images/pagseguro.svg" alt="" className="icon-pagseguro" />
                                    <img src="../../assets/images/visa.svg" alt="" className="icon-visa" />
                                </div>
                                <div className="icons2">
                                    <img src="../../assets/images/mastercard.svg" alt="" className="icon-mastercard" />
                                    <img src="../../assets/images/elo.svg" alt="" className="icon-elo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Rodape />
        </ContainerPagamento>
    )
}