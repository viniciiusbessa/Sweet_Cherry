import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from './pages/inicial/index'
import Categoria from './pages/destaque/index'
import SobreNos from './pages/sobre_nos/index'
import Login from './pages/entrar/bem_vindo/index'
import CompraFinalizada from './pages/compra-finalizada/index'
import Perfil from './pages/perfil/index'
import VerPedido from './pages/ver_pedido/index'


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
            </Switch>
        </BrowserRouter>
    )
}
