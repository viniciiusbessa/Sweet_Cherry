import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from './pages/inicial/index'
import Categoria from './pages/destaque/index'
import SobreNos from './pages/sobre_nos/index'
import Login from './pages/entrar/bem_vindo/index'

import CompraFinalizada from './pages/compra-finalizada/index'

import Perfil from './pages/perfil/index'
import VerPedido from './pages/ver_pedido/index'

import InicioAdm from './pages/adm/inicial_adm/index'
import AdmProdutos from './pages/adm/administrar_produtos/index'
import AdmPedidos from './pages/adm/administrar_pedidos/index'
import AddProduto from './pages/adm/adicionar_produto/index'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={CompraFinalizada} />
                <Route path="/inicio" component={Inicio} />
                <Route path="/categoria" component={Categoria} />
                <Route path="/sobreNos" component={SobreNos} />
                <Route path="/login" component={Login} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/ver-pedido" component={VerPedido} />
                <Route path="/inicio-adm" component={InicioAdm} />
                <Route path="/administrar-produtos" component={AdmProdutos} />
                <Route path="/administrar-pedidos" component={AdmPedidos} />
                <Route path="/add-produto" component={AddProduto} />
            </Switch>
        </BrowserRouter>
    )
}
