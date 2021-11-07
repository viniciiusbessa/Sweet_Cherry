import Cabecalho from '../../components/commum/header/index'
import Rodape from '../../components/commum/footer/index'
import { ContainerPerfil } from './styled'


import LoadingBar from 'react-top-loading-bar'

import React, { useRef, useState } from 'react'


import { useHistory } from 'react-router-dom'


export default function Perfil() {
    const navigation = useHistory();

    const [endereco, setEndereco] = useState('')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    
    // const logoff = () => {
    //     Cookies.remove('usuario-logado')
    //     navigation.push('/')
    // }

    // async function inserirDados() {
    //     let r = await api.inserirCliente( endereco, nome, cpf, nascimento, telefone, email, senha )
    //     if (r.erro) {
    //         toast.error(`❌ ${r.erro}`)
    //     } else {
    //         toast.dark('✔️ Cliente inserido com sucesso')
    //     }
    // }

    // async function alterando(item) {
    //     setEndereco(item.id_endereco);
    //     setNome(item.nm_cliente);
    //     setCpf(item.ds_cpf);
    //     setNascimento(item.dt_nascimento);
    //     setTelefone(item.nr_telefone);
    //     setEmail(item.ds_email);
    //     setSenha(item.ds_senha);
    //     setidAlterando(item.id_cliente);
    // }


    const verItens = async () => {
        navigation.push('/ver-pedido')
    }

    const Inicio = async () => {
        navigation.push('/')
    }

    const loading = useRef(null)




     // async function removerProduto(id) {
      //    loading.current.complete();

      //    confirmAlert({
       //       title: 'Excluir conta',
       //       message: `Tem certeza que deseja excluir esta conta?`, 
       //       buttons: [
       //           {
          //            label: 'Sim',
             //         onClick: async () => {
                //          let r = await api.removerConta(id);
                   //       if(r.erro)
                      //        toast.error(`${r.erro}`);
                         // else {
                            //  toast.success('🗑️ Conta excluída com sucesso!');
                            //  listarProdutos();
                        //  }
                    //  }
                //  },
                //  {
               //       label: 'Não'
               //   }
            //  ]
        //  });
    //  }

    //  useEffect(() => {
     //     listarProdutos();
    //  },[])


    return (
    <ContainerPerfil>
        <LoadingBar color='white' ref={loading}/>
        <Cabecalho />
        <div className="conteudo-perfil">

            <div className="info-pessoal-perfil">
                <div className="nome-pessoa-perfil">Olá </div>

                <div className="box-dados-conta-perfil">
                    <div className="dados-conta-perfil">Dados da conta</div>
                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="email">E-mail:</div>
                    </div>
                    <input className="input-email" value={email.ds_email} onChange={e => setEmail(e.target.value)} />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="senha">Senha:</div>
                    </div>
                    <input className="input-senha" value={senha} onChange={e => setSenha(e.target.value)} />
                </div>

                <div className="box-dados-pessoais-perfil">

                    <div className="dados-pessoais-perfil">Dados Pessoais</div>
                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="nome">Nome:</div>
                    </div>

                    <input className="input-nome" value={nome} onChange={e => setNome(e.target.value)} />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="endereco">Endereco:</div>
                    </div>
                    <input className="input-endereco" value={endereco} onChange={e => setEndereco(e.target.value)} />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="data">Data de Nascimento</div>
                    </div>
                    <div className="info-obrigatorio-data">Necessário ter maioridade para comprar em nosso site com cartão de crédito</div>
                    <div className="formato">Formato DD/MM/AAAA</div>
                    <input className="input-data" type="date" value={nascimento} onChange={e => setNascimento(e.target.value)} />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="cpf">CPF</div>
                    </div>
                    <div className="info-obrigatorio-cpf">Necessário para emissão de notas fiscais</div>
                    <input className="input-cpf" value={cpf} onChange={e => setCpf(e.target.value)} />

                    <div className="box-infos">
                        <img src="../../assets/images/asterisco-perfil.png" alt="" />
                        <div className="telefone">Telefone</div>
                    </div>
                    <div className="info-obrigatorio-telefone">Caso a gente precise entrar em contato sobre seus pedidos</div>
                    <input className="input-telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />

                </div>

                
                <div className="box-logout" >
                    <div className="logout-conta-perfil">Sair da conta</div>
                    <img src="../../assets/images/log-out.svg" alt="" />
                </div>
                

                <div className="box-excluir" onClick={Inicio}>
                    <div className="excluir-conta-perfil">Excluir conta</div>
                    <img src="../../assets/images/Lixeira-perfil.svg" alt="" />
                </div>

                <div className="btn-salvar"><button>Salvar</button></div>
            </div>

            <div className="info-pedidos">
                <div className="titulo-pedido">Pedidos</div>

                <div className="barra-pesquisa-adm2">
                    <input className="input-pesquisa-pedido" placeholder="pesquisa" /> 
                    <img title="pesquisa" src="../../assets/images/ferramenta-lupa 7.png" alt="" />
                </div>

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