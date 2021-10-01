import Cabecalho from '../../components/header/index'
import Rodape from '../../components/footer/index'

import { ContainerPerfil } from './styled'

import { useHistory } from 'react-router-dom'

export default function Perfil() {
    const navigation = useHistory();

    const verItens = async () => {
        navigation.push('/ver-pedido')
    }

    const Inicio = async () => {
        navigation.push('/')
    }

    return (
    <ContainerPerfil>
        <Cabecalho />
        <div className="conteudo-perfil">

            <div className="info-pessoal-perfil">
                <div className="nome-pessoa-perfil">Olá Fulano</div>

                <div className="box-dados-conta-perfil">
                    <div className="dados-conta-perfil">Dados da conta</div>
                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="email">E-mail:</div>
                    </div>
                    <input className="input-email" />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="senha">Senha:</div>
                    </div>
                    <input className="input-senha" />
                </div>

                <div className="box-dados-pessoais-perfil">

                    <div className="dados-pessoais-perfil">Dados Pessoais</div>
                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="nome">Nome:</div>
                    </div>

                    <input className="input-nome" />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="endereco">Endereco:</div>
                    </div>
                    <input className="input-endereco" />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="data">Data de Nascimento</div>
                    </div>
                    <div className="info-obrigatorio-data">Necessário ter maioridade para comprar em nosso site com cartão de crédito</div>
                    <div className="formato">Formato DD/MM/AAAA</div>
                    <input className="input-data" type="date" />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="cpf">CPF</div>
                    </div>
                    <div className="info-obrigatorio-cpf">Necessário para emissão de notas fiscais</div>
                    <input className="input-cpf" />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="telefone">Telefone</div>
                    </div>
                    <div className="info-obrigatorio-telefone">Caso a gente precise entrar em contato sobre seus pedidos</div>
                    <input className="input-telefone" />

                </div>

                
                <div className="box-logout" onClick={Inicio}>
                    <div className="logout-conta-perfil">Sair da conta</div>
                    <img src="../../assets/images/log-out.svg" alt="" />
                </div>
                

                <div className="box-excluir">
                    <div className="excluir-conta-perfil">Excluir conta</div>
                    <img src="../../assets/images/Lixeira-perfil.svg" alt="" />
                </div>

                <div className="btn-salvar"><button>Salvar</button></div>
            </div>

            <div className="info-pedidos">
                <div className="titulo-pedido">Pedidos</div>

                <input className="input-pesquisa-pedido" placeholder="pesquisa" />

                <div className="subtitulo-pedido">Seus pedidos em</div>
                <div className="subtitulo-pedido">andamento estão aqui :)</div>

                <div className="box-pedido">
                    <img className="img-pedidos" src="../../assets/images/bolinho-box-pedidos.png" alt="" />
                    

                    <div className="info-pedido">Compra: 30/09/2021</div>
                    <div className="info-pedido">Quantidade de itens: 7</div>
                    <div className="info-pedido">Estado: á caminho</div>
                    <div className="info-pedido">Total: R$51,00</div>

                    <div className="btn-ver-itens"><button onClick={verItens}>Ver itens</button></div>
                </div>

                <div className="btn-cancelar-pedido"><button>Cancelar pedido</button></div>
            </div>

        </div>
        <Rodape />
    </ContainerPerfil>
    )
}