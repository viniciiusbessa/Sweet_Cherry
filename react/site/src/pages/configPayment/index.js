import { ContainerPagamento } from './styled'

import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'

import { useHistory } from 'react-router-dom'

export default function ConfirmarPagamento() {
    const navigation = useHistory();

    const compraFinalizada = async () => {
        navigation.push('/compra-finalizada')
    }

    return(
        <ContainerPagamento>
            <div className="fundo-cabecalho">
                <Cabecalho />
            </div>

            <div class="conteudo">
                <div class="nome-conteudo">Confirmar pagamento</div>
                <div class="conteiner-geral">
                    <div class="conteiner-pes-etrg">
                        <div class="dados">
                            <div class="nm-box">Dados pessoais</div>
                            <div class="nm-input">E-mail:</div>
                            <input type="text"id="txtBusca"/>
                            <div class="nm-input">CPF:</div>
                            <input type="text"id="txtBusca"/>
                            <div class="nm-input">Telefone:</div>
                            <input type="text"id="txtBusca"/>
                        </div>
                        <div class="entrega">
                            <div class="fr-entrega">
                                <div class="nm-box">Entrega</div>
                                <select name="tipoentrega" id="" class="entrega">
                                    <option>Domicílio</option>
                                </select>
                            </div>
                            <div class="nm-input">Endereço:</div>
                            <input type="text"id="txtBusca"/>
                            <div class="box-nurm-comple">
                                <div class="box-numero">
                                    <div class="nm-input">Número:</div>
                                    <input class="input-numer" type="text"id="txtBusca"/>
                                </div>
                                <div class="box-complemento">
                                    <div class="nm-input">Complemento:</div>
                                    <input class="input-comple"type="text"id="txtBusca"/>
                                </div>
                            </div>
                            <div class="nm-input">Destinatário:</div>
                            <input type="text"id="txtBusca"/>
                        </div>                          
                    </div>

                    <div class="conteiner-pagamento">
                        <div class="box-pg">
                            <div class="nm-box">Pagamento</div>
                            <div class="nm-input">Número do cartão:</div>
                            <input type="text"id="txtBusca"/>
                            <div class="nm-input">Parcelas:</div>
                            <select name="listaparcelas" id="" class="parcelas">
                                <option>1x</option>
                                <option>2x</option>
                                <option>3x</option>
                                <option>4x</option>
                                <option>5x</option>
                                <option>6x</option>
                                <option>7x</option>
                                <option>8x</option>
                                <option>9x</option>
                                <option>10x</option>
                                <option>11x</option>
                                <option>12x</option>
                            </select>
                            <div class="nm-input">Nome:</div>
                            <input type="text"id="txtBusca"/>
                            <div class="nm-input">Código de segurança:</div>
                            <input type="text"id="txtBusca"/>
                            <div class="nm-input">CPF do titular:</div>
                            <input type="text"id="txtBusca"/>
                        </div>
                        <div class="botoes-pgmt">
                            <button class="vlt-carrinho">Voltar</button>
                            <button onClick={compraFinalizada} class="final-cmpra">Finalizar compra</button>
                        </div>
                        <div class="box-cartoes">
                            <div class="titulo-box">Pague com:</div>
                            <div class="box-icones">
                                <div class="icons1">
                                    <img src="../../assets/images/pagseguro.svg" alt="" class="icon-pagseguro" />
                                    <img src="../../assets/images/visa.svg" alt="" class="icon-visa" />
                                </div>
                                <div class="icons2">
                                    <img src="../../assets/images/mastercard.svg" alt="" class="icon-mastercard" />
                                    <img src="../../assets/images/elo.svg" alt="" class="icon-elo" />
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