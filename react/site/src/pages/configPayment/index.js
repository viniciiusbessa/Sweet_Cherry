import { ContainerPagamento } from './styled'

import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import { InputPayment } from '../../components/styled/inputsCPay'

import { useHistory } from 'react-router-dom'

export default function ConfirmarPagamento() {
    const navigation = useHistory();

    const compraFinalizada = async () => {
        navigation.push('/compra-finalizada')
    }

    const pagAnterior = async () => {
        window.history.back()
    }

    return(
        <ContainerPagamento>
            <div classNameName="fundo-cabecalho">
                <Cabecalho />
            </div>

            <div className="conteudo">
                <div className="nome-conteudo">Confirmar pagamento: R$ 5,00 </div>
                <div className="conteiner-geral">
                    <div className="conteiner-pes-etrg">
                        <div className="dados">
                            <div className="nm-box">Dados pessoais</div>
                            <div className="nm-input">E-mail:</div>
                            <InputPayment/>
                            <div className="nm-input">CPF:</div>
                            <InputPayment/>
                            <div className="nm-input">Telefone:</div>
                            <InputPayment/>
                        </div>
                        <div className="entrega">
                            <div className="fr-entrega">
                                <div className="nm-box">Entrega</div>
                                <select name="tipoentrega" id="" className="entrega">
                                    <option>Domicílio</option>
                                </select>
                            </div>
                            <div className="nm-input">Endereço:</div>
                            <InputPayment/>
                            <div className="box-nurm-comple">
                                <div className="box-numero">
                                    <div className="nm-input">Número:</div>
                                    <InputPayment/>
                                </div>
                                <div className="box-complemento">
                                    <div className="nm-input">Complemento:</div>
                                    <InputPayment/>
                                </div>
                            </div>
                            <div className="nm-input">Destinatário:</div>
                            <InputPayment/>
                        </div>                          
                    </div>

                    <div className="conteiner-pagamento">
                        <div className="box-pg">
                            <div className="nm-box">Pagamento</div>
                            <div className="nm-input">Número do cartão:</div>
                            <InputPayment/>
                            <div className="nm-input">Parcelas:</div>
                            <select name="listaparcelas" id="" className="parcelas">
                                <option>1x</option>
                                <option>2x</option>
                                <option>3x</option>
                                <option>4x</option>
                                <option>5x</option>
                            </select>
                            <div className="nm-input">Nome:</div>
                            <InputPayment/>
                            <div className="nm-input">Código de segurança:</div>
                            <InputPayment/>
                            <div className="nm-input">CPF do titular:</div>
                            <InputPayment/>
                        </div>
                        <div className="botoes-pgmt">
                            <button onClick={pagAnterior} className="vlt-carrinho">Voltar</button>
                            <button onClick={compraFinalizada} className="final-cmpra">Finalizar compra</button>
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