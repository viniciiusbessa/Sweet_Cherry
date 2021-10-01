import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/loginUser/index'
import Cadastro from './pages/login/registerUser/index'
import LoginAdm from './pages/login/loginAdm/index'

import Inicio from './pages/home/index'
import Categoria from './pages/detachProducts/index'
import SobreNos from './pages/aboutUs/index'
import Carrinho from './pages/cartProducts/index'

import Compra from './pages/purchaseProducts/index'
import ConfirmarPagamento from './pages/configPayment/index'
import CompraFinalizada from './pages/purchaseFinished/index'

import Favoritos from './pages/favorites/index'
import Perfil from './pages/profileUser/index'
import VerPedido from './pages/seeRequests/index'
import Novidades from './pages/newsProducts/index'

import InicioAdm from './pages/adm/admHome/index'
import AdmProdutos from './pages/adm/admProducts/index'
import AdmPedidos from './pages/adm/admRequests/index'
import AddProduto from './pages/adm/addProduct/index'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicio} />
                <Route path="/destaque" component={Categoria} />
                <Route path="/sobreNos" component={SobreNos} />
                <Route path='/carrinho' component={Carrinho} />
                <Route path="/favoritos" component={Favoritos} />
                <Route path="/compra" component={Compra} />
                <Route path="/novidades" component={Novidades} />
                <Route path="/conf_pagamento" component={ConfirmarPagamento} />
                <Route path="/compra-finalizada" component={CompraFinalizada} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/login-adm" component={LoginAdm} />
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
